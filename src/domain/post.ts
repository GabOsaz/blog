import { User } from "./user"

export type Post = {
    id: UniqueId;
    author: string;
    title: string;
    subtitle: string;
    createdAt: CreatedAt;
    content: string;
}

export function createPost(id: UniqueId, title: string, subtitle: string, content: string, user: User) {
    return {
        id,
        title,
        subtitle,
        content,
        author: user.id,
        createdAt: new Date().toISOString,
    }
}
