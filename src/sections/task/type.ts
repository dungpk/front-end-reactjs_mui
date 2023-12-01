export interface GroupTask {
    id?: string;
    nameGroup?: string;
}

export interface Mission {
    id: string;
    phoneStudent?: string;
    nameStudent?: string;
    creator?: string;
    title?: string;
    implementer?: string;
    status?: string;
    createdDate?: string;
    toDate?: string;
    fromDate: string;
    groupTaskId?: string;
    content?:string;
    groupTask?: GroupTask;
  }


  export interface MissionQuery {
    id: string;
    phoneStudent?: string;
    nameStudent?: string;
    creator?: string;
    title?: string;
    implementer?: string;
    status?: string;
    createdDate?: string;
    toDate?: string;
    fromDate?: string;
    content?:string;
    groupTaskId?: string;
  }
  
  