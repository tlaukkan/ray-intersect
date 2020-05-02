export interface Go {
    importObject:any;
    run(instance: any): Promise<void>;
}
