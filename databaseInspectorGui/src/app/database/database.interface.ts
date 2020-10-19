export interface IInstance {
    serverName: string,
    instanceName: string,
    instanceType: string,
    isClustered: string,
    version: string,
    dataDirectory: string
}

export interface IDatabase {
    databaseName: string,
    databaseInstance: IInstance
}