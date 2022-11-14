import { apiAxios } from '../app/apiAxios.js';

export async function action({ params, request }) {
  const formData = await request.formData();

  //Mudando o campo de "name" -> "title"
  const titleValue = formData.get("name");
  formData.delete("name");
  formData.append("title", titleValue);

  // Adicionando outros campos obrigatórios
  formData.append("userId", params.userId);
  formData.append("content", "");

  const data = Object.fromEntries(formData);

  await apiAxios.post('/article/create-article/', data); 

  return { ok: true };
}
