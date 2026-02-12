export default async function DocsPage({
  params,
}: PageProps<"/docs/[[...slug]]">) {
  const pages = await params;
  return <div>Params: {pages.slug?.join(",")}</div>;
}
