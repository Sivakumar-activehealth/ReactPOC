export const SuccessMessage = "Success";
export const EmptyFieldWarning = "Field cannot be empty!";
export const DataCallback = {
    Data:"Data",pageCount:"pageCount",totalCount:"totalCount"
};
export const ActionEvents = {
    receiveData: "RECEIVE_DATA",
    createNew: "CREATE",
    modifyOrUpdate: "MODIFY_DATA",
    remove: "DELETE"
};
export const MessageActionEvents = {
    receiveData: "RECEIVE_MESSAGE_DATA",
    createNew: "CREATE_MESSAGE",
    modifyOrUpdate: "MODIFY_MESSAGE_DATA",
    remove: "DELETE_MESSAGE"    
};

export const EpisodeOptions = [
  'Days', 'Months'
];
export const MeOptions =[
         {value: 'Sensitive', label: 'Sensitive '},
         {value: 'PatientDerived ', label: 'Patient Derived '} ,
         {value: 'Testing ', label: 'Testing '} 
];

export const MeChronic =[
         {value: 'Episodic ', label: 'Episodic  '},
];
export const InBoundcommunication =[
         {value: 'Requires Confirmation Before Closing', label: 'Requires Confirmation Before Closing'},
         {value: 'Include in Standard Run', label: 'Include in Standard Run',checked:true},
         {value: 'Impactable ', label: 'Impactable'}
];

export const radioOptions= [
            { value: 'Yes', text: 'Yes' },
            { value: 'No', text: 'No'}
];

export const AdverseEventoptions = [
  {label:'Bladder Cancer', value: 1},
  {label:'Blood clot', value: 2},
  {label:'Bone disease', value: 3},
  {label:'Blood transfusion', value: 4},
  {label:'Build up of acid in body fluids (acidosis)', value: 5}
];

export const CordinationOptions= [
            { value: 'Coordination of Care ', label: 'Coordination of Care '}
];

export const MeStatus= [
            { value: 'Coordination of Care ', text: 'Coordination of Care '}
];
export const MeGridData = [
    {ID:1, Live: 'N',Title:'Elevated HbA1C - Consider a Confirmatory Test for Diabetes',Status:'Production',Sev:1,METype:'Diagnostic Workup',ProdReady:'Stop/Modify',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:2, Live: 'N',Title:'Isotretinoin - Consider Pregnancy Testing',Status:'Production',Sev:1,METype:'',ProdReady:'Diagnostic Workup',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:3, Live: 'N',Title:'Testosterone - Consider PSA Monitoring',Status:'Production',Sev:1,METype:'',ProdReady:'Stop a Drug',LastEdited:'5/20/2015',Tasks:'06/25/2012'},
    {ID:4, Live: 'N',Title:'Testosterone - Contraindicated in Prostate Cancer',Status:'Production',Sev:2,METype:'Stop a Drug',ProdReady:'Stop/Modify',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:5, Live: 'N',Title:'Testicular Cancer ',Status:'ProductionReady',Sev:2,METype:'',ProdReady:'Stop/Modify a Drug',LastEdited:'7/15/2015',Tasks:'06/25/2012'},
    {ID:6, Live: 'N',Title:'Testosterone - Consider ',Status:'ProductionReady',Sev:2,METype:'Stop/Modify a Drug',ProdReady:'Stop a Drug',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:7, Live: 'Y',Title:'Testosterone - Risk of Cardiovascular Events',Status:'ProductionReady',Sev:3,METype:'Diagnostic Workup',ProdReady:'Stop/Modify',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:8, Live: 'Y',Title:'Diabetes - LDL-C Test (2014)',Status:'sDraft',Sev:3,METype:'',ProdReady:'Diagnostic Workup',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:9, Live: 'Y',Title:'Diabetes - Hemoglobin A1c Test (2014)',Status:'Draft',Sev:2,METype:'Diagnostic Workup',ProdReady:'Stop/Modify',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
    {ID:10, Live: 'Y',Title:'ME Test Title',Status:'Inactive',Sev:1,METype:'Diagnostic Workup',ProdReady:'Stop/Modify',LastEdited:'7/20/2015',Tasks:'06/25/2012'},
];

export const MEModel = {
MonitoredEventModel: [{ Id : '' } ,
                                        { MeTilte : '' },
                                        { ProviderTilteEng : '' },
                                        { ProviderTilteSpanish : ''} ,
                                        { MemberTilteEng : ''},
                                        { MemberTilteSpanish : ''} ,
                                        { MeType : null},
                                        { MeProgram : null},
                                        { MeApplicabletype : null},
                                        { MeShortDescription : null},
                                        { MeSeverity : null},
                                        { MeMemberDisplayPriority : null}
                                        ] ,
                  ProviderModel: [  { MeOutPatientPriority : null},
                                    { MeOptions : null} ,  
                                    { MechronicBehavior : null} ,
                                    { EpisodeSeperation : null} ,
                                    { EpisodeSeperationtime : null} ,
                                    { DataLagProtection:null},
                                    { DataLagProtectionTime:null},
                                    { TherapeuticClass : null} ,
                                    { TherapeuticSubClass : null} 
                                 ] ,
                ClinicalModel: [ { ClinicalType : null},
                                 { InboundCommunication1 : null},
                                 { InboundCommunication2 : null},
                                 { CareManager :null},
                                 { Statedate : null},
                                 { Enddate : null}
                               ] ,
                SessionalModel:[
                                { DemographicCategory : null},
                                { LabRequirements : null},
                                { Conditions : null},
                                { AdverseEvent : null},
                                { DisplayDataTable : null},
                                { CoordinationCare : null}
                              ]                                                                                                     
                 
}