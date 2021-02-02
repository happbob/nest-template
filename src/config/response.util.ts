export class ResponseMessage{
    private data: any | any[];
    private message:string;
    private isSuccess:boolean;
    private code: number;

    public success(message:string='Success'):ResponseMessage{
        this.code = 200;
        this.isSuccess = true;
        this.message = message;
        return this;
    }

    public error(code:number,message:string = "Error"):ResponseMessage{
        this.code = code;
        this.message=message;
        this.isSuccess=false;
        return this;
    }

    public body(data:any|any[]=''):ResponseMessage{
        this.data =data;
        return this;
    }

    get Data():any|any[]{
        return this.data;
    }

    get Code():number{
        return this.code;
    }

    get IsSuccess():boolean{
        return this.isSuccess;
    }

    get Message():string{
        return this.message;
    }

    public build(): Response{
        return new Response(this);
    }
}

export class Response{
    data:any | any[];
    message:string;
    isSuccess:boolean
    code:number;

    constructor(mes:ResponseMessage){
        this.data = mes.Data;
        this.code = mes.Code;
        this.isSuccess = mes.IsSuccess;
        this.message = mes.Message;
    }
}