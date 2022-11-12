export async function action({ params, request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  console.log(`Create article for user ${params.userId}`);
  return { ok: true };
}
