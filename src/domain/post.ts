export type Post = {
    id: UniqueId;
    author: string;
    title: string;
    subtitle: string;
    createdAt: CreatedAt;
    content: string;
}
