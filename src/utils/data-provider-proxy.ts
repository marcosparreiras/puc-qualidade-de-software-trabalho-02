import {
  type CreateParams,
  type DataProvider,
  type DeleteManyParams,
  type DeleteParams,
  type GetListParams,
  type GetManyParams,
  type GetManyReferenceParams,
  type GetOneParams,
  type UpdateManyParams,
  type UpdateParams,
} from "react-admin";

interface Users {
  id: string;
  name: string;
  email: string;
}

export class DataProviderProxy implements DataProvider {
  constructor(private dataProvider: DataProvider) {}

  private dataMapper(user: any): Users {
    return {
      name: user?.name,
      email: user?.email,
      id: user._id,
    };
  }

  public async getList(resource: string, params: GetListParams) {
    const response = await this.dataProvider.getList(resource, params);
    return {
      ...response,
      data: (response.data as any)["users"].map(this.dataMapper),
    };
  }

  public async getOne(resource: string, params: GetOneParams) {
    const response = await this.dataProvider.getOne(resource, params);
    return {
      ...response,
      data: this.dataMapper((response.data as any)["user"]),
    } as any;
  }

  public async create(resource: string, params: CreateParams) {
    const response = await this.dataProvider.create(resource, params);
    return {
      ...response,
      data: this.dataMapper(response.data),
    } as any;
  }

  public async update(resource: string, params: UpdateParams) {
    const response = await this.dataProvider.update(resource, params);
    return {
      ...response,
      data: this.dataMapper((response.data as any)["user"]),
    } as any;
  }

  public async getMany(resource: string, params: GetManyParams) {
    return this.dataProvider.getMany(resource, params);
  }

  public async getManyReference(
    resource: string,
    params: GetManyReferenceParams
  ) {
    return this.dataProvider.getManyReference(resource, params);
  }

  public async updateMany(resource: string, params: UpdateManyParams) {
    return this.dataProvider.updateMany(resource, params);
  }

  public async delete(resource: string, params: DeleteParams) {
    try {
      const reponse = await this.dataProvider.delete(resource, params);
      return reponse;
    } catch (error: unknown) {
      return {
        data: params.id,
      };
    }
  }

  public async deleteMany(resource: string, params: DeleteManyParams) {
    try {
      const reponse = await this.dataProvider.deleteMany(resource, params);
      return reponse;
    } catch (error: unknown) {
      return {
        data: params.ids,
      };
    }
  }
}
