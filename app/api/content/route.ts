import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Octokit } from "@octokit/rest";

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      console.error('Missing GitHub config:', { token: !!token, owner, repo });
      return NextResponse.json(
        { 
          services: [], 
          packages: [], 
          events: [], 
          team: [],
          hero: {
            backgroundImage: '/hero-bg.jpg',
            title: 'Transform Your Workforce',
            subtitle: 'Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.'
          }
        },
        { status: 200 }
      );
    }

    const octokit = new Octokit({ auth: token });

    try {
      const response = await octokit.repos.getContent({
        owner,
        repo,
        path: 'data/content.json',
      });

      if ('content' in response.data) {
        const content = Buffer.from(response.data.content, 'base64').toString();
        const parsed = JSON.parse(content);
        // Ensure hero exists
        if (!parsed.hero) {
          parsed.hero = {
            backgroundImage: '/hero-bg.jpg',
            title: 'Transform Your Workforce',
            subtitle: 'Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.'
          };
        }
        return NextResponse.json(parsed);
      }

      return NextResponse.json({ 
        services: [], 
        packages: [], 
        events: [], 
        team: [],
        hero: {
          backgroundImage: '/hero-bg.jpg',
          title: 'Transform Your Workforce',
          subtitle: 'Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.'
        }
      });
    } catch (error: any) {
      if (error.status === 404) {
        // File doesn't exist yet - that's fine
        return NextResponse.json({ 
          services: [], 
          packages: [], 
          events: [], 
          team: [],
          hero: {
            backgroundImage: '/hero-bg.jpg',
            title: 'Transform Your Workforce',
            subtitle: 'Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.'
          }
        });
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in GET /api/content:', error);
    return NextResponse.json(
      { 
        services: [], 
        packages: [], 
        events: [], 
        team: [],
        hero: {
          backgroundImage: '/hero-bg.jpg',
          title: 'Transform Your Workforce',
          subtitle: 'Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.'
        }
      },
      { status: 200 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized - Please login first' },
        { status: 401 }
      );
    }

    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_OWNER;
    const repo = process.env.GITHUB_REPO;

    if (!token || !owner || !repo) {
      return NextResponse.json(
        { error: 'GitHub configuration error' },
        { status: 500 }
      );
    }

    const octokit = new Octokit({ auth: token });
    const content = await request.json();

    let sha: string | undefined;
    try {
      const currentFile = await octokit.repos.getContent({
        owner,
        repo,
        path: 'data/content.json',
      });
      if ('sha' in currentFile.data) {
        sha = currentFile.data.sha;
      }
    } catch (error) {
      console.log('Creating new content file');
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: 'data/content.json',
      message: `Update content via admin - ${new Date().toLocaleString()}`,
      content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
      sha,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in POST /api/content:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}