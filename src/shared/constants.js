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

export const MeTempData=[{"id":57,"name":"Heart Failure - Consider Increasing the ACE Inhibitor Dose","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"1. Age >/= 18 \n2. CHF ANY STAGE VALIDATION is confirmed \n3. Validate CHF with ONE of following: \n a) Current refill for digoxin. \n b) Current refill of Coreg or long-acting metoprolol. \n c) Current refill of a loop diuretic (e.g. Lasix, Bumex, Demadex, Edecrin). \n4. Current refill of low-dose ACE inhibitor (e.g. captopril = 12.5mg, enalapril =2.5, fosinopril =10, lisinopril = 5 mg, quinipril = 5mg, ramipril = 2.5mg, trandolapril =1 mg, perindopril = 2 mg). \n \n \nEXCLUSIONS: \n1. ACE inhibitor Contraindications is confirmed (e.g. renal artery stenosis, angioedema). \n2. Heart transplant validation is confirmed \n3. Atrial Fibrillation (2 in 12 months) if digoxin used to validate CHF (see 4a) \n4. Drugs used for pulmonary hypertension in the last 12 months (e.g. Bosentan/Flolan) \n5. Current refill for an ARB \n6. Rx for a high-dose ACE inhibitor in the past 24 months. \n7. 1 code for diastolic heart failure in the past 24 months from claims or HIE \n"},
{"id":62,"name":"Heart Failure - Consider Adding an ACE Inhibitor","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"AUTOMATION\n1. If CHF Any Stage Validation is Confirmed \n2. Absence of current refill for Ace Inhibitor or ARB (claims or drug module)\n\nEXCLUSIONS:\n1. ACE inhibitor contraindications is confirmed (e.g. renal artery stenosis, angioedema).\n2. Heart transplant validation is confirmed.\n3. Atrial Fibrillation (2 in 12 months) if Digoxin used to validate CHF\n4. Drugs used for pulmonary hypertension in the last 12 months (E.g.Bosentan/Flolan) (claims or drug module).\n5. Valve surgery in the last 6 months. \n6. ACE Alternative rule confirmed.\n"},{"id":63,"name":"Heart Failure - Consider Adding an Aldosterone Antagonist","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"AUTOMATION\n1. Age >/= 18\n2. CHF Any Stage Validation is Confirmed\n3. One of the following\n a. patient data indicating CHF severe symptoms in the past 3 months\n b. hospitalization overlapping 7 days before or after a CHF diagnosis in the past 6 months\n c. hospitalization with primary diagnosis of CHF in the past 6 months\n d. BNP Result Value > 4000 in the past 6 months\n4. Current refill for ALL of the following (must also be present before hospitalization)\n a. Loop diuretic (e.g. Lasix, Bumex, Demadex, Edecrin) (claims or drug module)\n b. Beta Blocker (claims or drug module)\n c. Ace Inhibitor/ARB (claims or drug module)\n5. Absence of a current refill of aldosterone antagonist \n\nEXCLUSIONS:\n1. Heart transplant in the past\n2. Creatinine > 2.5 in males and Creatinine >2.0 in females in the last 12 months\n3. Potassium > 5.0 in the last 6 months\n4. Hyperpotassemia in the last 6 months\n5. Drugs used for pulmonary hypertension in the last 12 months (e.g., bosentan/flolan) \n6. Current refill for potassium supplements, potassium-sparing diuretics.\n7. CKD Stage 4 or Stage 5 validation is confirmed. \n8. Revascularization (PTCA, CABG) in the last month\n9. Eplerenone/spironolactone in last 6 months\n"},
{"id":70,"name":"Warfarin and Subtherapeutic INR - Consider Increasing the Dose","severitylevelcode":1,"applicabilitytypecode":"GIC","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"1. Current refill for Warfarin.\n2. Two consecutive INR values < 1.5 in the last 4 months.\n\nManual Exclusions: \n1. Increase in the dose of Warfarin after the most recent lab value\n\nExclusions:\n1. Regular monitoring: 4 INR in the past 6 weeks\n2. Increase in INR > 20% between last 2 values (indicates improving INR)\n3. Hospitalization following an low INR in the past 4 months.\n4. Low Molecular Weight Heparin (lovenox) or fondaparinux (Atrixtra) in last month\n5. Warfarin Contraindications is confirmed\n\nNOTE: Send even if dosage is unknown"},{"id":71,"name":"Warfarin and Supratherapeutic INR - Consider Decreasing the Dose","severitylevelcode":1,"applicabilitytypecode":"GIC","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"1. Current refill for warfarin.\n2. Two consecutive INR values > 4.0 in the last 4 months.\n\nManual Exclusions:\n1. Recent normal PT/INR or PT/INR without a result following the abnormal level.\n2. Decrease in the dose of Warfarin after the most recent elevated lab value.\n\nEXCLUSIONS:\n1. Regular monitoring: 4 INR or 4 PT levels in the past 2 months.\n2. Decrease in INR >/= 20% between last 2 values.\n3. Hospitalization following an elevated INR in the past 4 months."},
{"id":72,"name":"Warfarin - Consider INR Monitoring","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"AUTOMATION \n1. One of the following:\n a) Warfarin (total day supply 60 days in the last 4 months) with a current refill\n b) Pt data indicating Warfain in the last 3 months \n2. One of the following:\n a) Absence of PT Monitoring in the past 4 months\n b) Pt data indicating 'NO' to 'Is your blood monitored regularly for your blood thinner' in the past 4 months\n\nExclusions: \n1. INR Monitoring Validation is Confirmed\n2. INR Monitoring Surrogate is Confirmed\n3. Current refill for dabigatran\n4. Current refill for rivaroxaban"},
{"id":73,"name":"Diabetes and Elevated HbA1c - Consider Intensifying Drug Therapy","severitylevelcode":2,"applicabilitytypecode":"GIC","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"1. Diabetes validation or Pediatric Diabetes type 2 confirmed\n2. One of the following:\n a) HbA1c >/= 8 in the last 4 months \n b) Pt data indicating HbA1c > 8 AND Pt data indicating NO to ¿Has your doctor changed your medication or diet management since you received this HbA1c?¿ \n\nManual Exclusions: \n1. The addition of a new agent, restart of same agent after a 3 month gap, or increase in the dose of the current diabetic agent 2 months prior to or anytime after the elevated HBA1C is a manual exclusion.\n2. The addition of a welchol or bromacriptine, restart of welchol or bromacriptine after a 3 month gap, or increase in the dose welchol 2 months prior to or anytime after the elevated HBA1C will be added to the manual exclusion\n3. A repeat HbA1c without results > 2 months after the elevated level. \n\nExclusions:\n1. Insulin in the past 6 months\n2. Current refill of diabetic medications/insulin \n3. Pt data indicating YES to Has your doctor changed your medication or diet management since you received this HbA1c?"},
{"id":75,"name":"Diabetes - Consider HbA1c Monitoring","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"AUTOMATION\n1. Diabetes Validation Confirmed\n2. One of the following:\n a) Absence of HbA1c in last 9 months\n b) Pt data indicating 'NO¿ to 'HbA1c in last 6 months\n\nEXCLUSIONS:\n1. Patient data indicating HbA1C value in the past 9 months\n2. Sickle Cell Disease or thalessemia with lab or procedure code for frutosamine in the past 9 months."},
{"id":80,"name":"CAD with Risk Factors - Consider Adding an ACE Inhibitor","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"1. Age >/= 18 years\n2. CAD Validation is Confirmed\n3. One of the following:\n HTN is confirmed for the member\n CKD is confirmed for the member\n4. Absence of a current refill for an Ace Inhibitor ( drug module or claims)\n\nEXCLUSIONS:\n1. Ace Inhibitor Contraindications Validation is Confirmed\n2. ACEI alternatives are confirmed"},{"id":82,"name":"PAD - Consider Adding an ACE Inhibitor","severitylevelcode":2,"applicabilitytypecode":"DENOM","chronicbehavior":"N","impactable":"Y","clinicalreviewcriteria":"1. Age >/=55 years \r\n2. PAD Validation is Confirmed\r\n3. Absence of a current refill for an Ace Inhibitor ( drug module or claims)\r\n\r\nEXCLUSIONS:\r\n1. Ace Contraindications Validation is Confirmed"}];