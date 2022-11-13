import { apiAxios } from '../app/apiAxios.js';

export async function action({ params }) {
  console.log(`Delete article ${params.docId}`);
  await apiAxios.delete(`article/delete-article/${params.docId}`); 
  return { ok: true };
}
