export async function action({ params }) {
  console.log(`Delete article ${params.docId}`);
  return { ok: true };
}
