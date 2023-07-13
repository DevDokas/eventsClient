export interface IEvent {
  id: string,
  nome: string,
  categoria: {
    nome: string,
    descricao: string,
    imagem: string,
    criado_em: string,
    atualizado_em: string
  },
  descricao: string,
  imagem: string,
  criado_em: string,
  atualizado_em: string
}
