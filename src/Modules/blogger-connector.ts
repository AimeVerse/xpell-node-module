
// /Users/tamirfridman/Documents/projects/xpell-node-module/src/Modules/blogger-connector.ts

import { XCommand, XModule, XModuleData } from "xpell-node";

export class BloggerConnector extends XModule {
    private apiKey: string = "";
    private blogId: string = "";

    constructor(data: XModuleData) {
        super(data);
    }

    public async _get_posts(xcmd:XCommand): Promise<any> {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${this.blogId}/posts?key=${this.apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    }

    public async getPost(xcmd:XCommand): Promise<any> {
        const postId = xcmd._params._post_id;
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${this.blogId}/posts/${postId}?key=${this.apiKey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }
        return response.json();
    }
}

export const BloggerConnectorModule = new BloggerConnector({ _name: "blogger-connector" });