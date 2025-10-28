export const runtime = "edge";

export const GET = () => {
    return Response.json({ message: "hello world from next" });
};
