import { FilterProps } from "../../types/Filter";
import api from "../api";

export const usuariosService = {

  async listar(params: any) {
      return await api.get(`/usuarios`, {
        params,
      });
  
  },

  async buscarByCpf(cpf: string) {
    return await api.get(`/usuarios/cpf/${cpf}`);
  },

  async create(user: any) {
    return await api.post(`/usuarios`, user);
  },

  async delete(cpf:string) {
    return await api.delete(`/usuarios/${cpf}`);
  },

}