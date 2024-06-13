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
  [key: string]: any;

  constructor(private dataProvider: DataProvider) {}

  private adaptResponseField(response: { data: any[] }, resourceField: string) {
    if (!(response.data as any)[resourceField]) {
      throw new Error("Internal server error");
    }
    response.data = (response.data as any)[resourceField];
  }

  private adaptResponseId(user: any): Users {
    return {
      name: user.name,
      email: user.email,
      id: user._id,
    };
  }

  public async getList(resource: string, params: GetListParams) {
    const response = await this.dataProvider.getList(resource, params);
    this.adaptResponseField(response, "users");
    response.data = response.data.map(this.adaptResponseId);
    return response;
  }

  public async getOne(resource: string, params: GetOneParams) {
    const response = await this.dataProvider.getOne(resource, params);
    this.adaptResponseField(response, "user");
    response.data = this.adaptResponseId(response.data);
    return response;
  }

  public async create(resource: string, params: CreateParams) {
    const response = await this.dataProvider.create(resource, params);
    response.data = this.adaptResponseId(response.data);
    return response;
  }

  public async update(resource: string, params: UpdateParams) {
    const response = await this.dataProvider.update(resource, params);
    this.adaptResponseField(response, "user");
    response.data = this.adaptResponseId(response.data);
    return response;
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
    return this.dataProvider.delete(resource, params);
  }

  public async deleteMany(resource: string, params: DeleteManyParams) {
    return this.dataProvider.deleteMany(resource, params);
  }
}
