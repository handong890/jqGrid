!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","../grid.base"],a):a(jQuery)}(function(a){a.jgrid=a.jgrid||{},a.jgrid.hasOwnProperty("regional")||(a.jgrid.regional=[]),a.jgrid.regional["pt-br"]={defaults:{recordtext:"Ver {0} - {1} de {2}",emptyrecords:"Nenhum registro para visualizar",loadtext:"Carregando...",pgtext:"Página {0} de {1}",pgfirst:"First Page",pglast:"Last Page",pgnext:"Next Page",pgprev:"Previous Page",pgrecs:"Records per Page",showhide:"Toggle Expand Collapse Grid"},search:{caption:"Procurar...",Find:"Procurar",Reset:"Resetar",odata:[{oper:"eq",text:"igual"},{oper:"ne",text:"diferente"},{oper:"lt",text:"menor"},{oper:"le",text:"menor ou igual"},{oper:"gt",text:"maior"},{oper:"ge",text:"maior ou igual"},{oper:"bw",text:"inicia com"},{oper:"bn",text:"não inicia com"},{oper:"in",text:"está em"},{oper:"ni",text:"não está em"},{oper:"ew",text:"termina com"},{oper:"en",text:"não termina com"},{oper:"cn",text:"contém"},{oper:"nc",text:"não contém"},{oper:"nu",text:"nulo"},{oper:"nn",text:"não nulo"}],groupOps:[{op:"AND",text:"todos"},{op:"OR",text:"qualquer um"}],operandTitle:"Click to select search operation.",resetTitle:"Reset Search Value"},edit:{addCaption:"Incluir",editCaption:"Alterar",bSubmit:"Enviar",bCancel:"Cancelar",bClose:"Fechar",saveData:"Os dados foram alterados! Salvar alterações?",bYes:"Sim",bNo:"Não",bExit:"Cancelar",msg:{required:"Campo obrigatório",number:"Por favor, informe um número válido",minValue:"valor deve ser igual ou maior que ",maxValue:"valor deve ser menor ou igual a",email:"este e-mail não é válido",integer:"Por favor, informe um valor inteiro",date:"Por favor, informe uma data válida",url:"não é uma URL válida. Prefixo obrigatório ('http://' or 'https://')",nodefined:" não está definido!",novalue:" um valor de retorno é obrigatório!",customarray:"Função customizada deve retornar um array!",customfcheck:"Função customizada deve estar presente em caso de validação customizada!"}},view:{caption:"Ver Registro",bClose:"Fechar"},del:{caption:"Apagar",msg:"Apagar registro(s) selecionado(s)?",bSubmit:"Apagar",bCancel:"Cancelar"},nav:{edittext:" ",edittitle:"Alterar registro selecionado",addtext:" ",addtitle:"Incluir novo registro",deltext:" ",deltitle:"Apagar registro selecionado",searchtext:" ",searchtitle:"Procurar registros",refreshtext:"",refreshtitle:"Recarregando tabela",alertcap:"Aviso",alerttext:"Por favor, selecione um registro",viewtext:"",viewtitle:"Ver linha selecionada",savetext:"",savetitle:"Save row",canceltext:"",canceltitle:"Cancel row editing"},col:{caption:"Mostrar/Esconder Colunas",bSubmit:"Enviar",bCancel:"Cancelar"},errors:{errcap:"Erro",nourl:"Nenhuma URL definida",norecords:"Sem registros para exibir",model:"Comprimento de colNames <> colModel!"},formatter:{integer:{thousandsSeparator:" ",defaultValue:"0"},number:{decimalSeparator:",",thousandsSeparator:" ",decimalPlaces:2,defaultValue:"0,00"},currency:{decimalSeparator:",",thousandsSeparator:".",decimalPlaces:2,prefix:"R$ ",suffix:"",defaultValue:"0,00"},date:{dayNames:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb","Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],monthNames:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],AmPm:["am","pm","AM","PM"],S:function(a){return 11>a||a>13?["º","º","º","º"][Math.min((a-1)%10,3)]:"º"},srcformat:"Y-m-d",newformat:"d/m/Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:!1,userLocalTime:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"}}});