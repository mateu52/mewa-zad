export type Review = {
    createdTime: string;
    id: number;
    fields: {
        author: string;
        content: string;
        sentiment: string;
        accept?: boolean | undefined;
        created_at: string;
        to_check?: boolean | undefined;

    }
}