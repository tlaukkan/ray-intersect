export interface Go {
    importObject:any;
    run(instance: any): Promise<void>;
}

function newGo(): Go;

export default newGo;