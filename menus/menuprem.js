const menuprem = (prefix) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
┏━━━『♦️』𝙈𝙀𝙉𝙐 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 『♦️』
┃
┃➣ ${prefix}Destrava
┃➣ ${prefix}Destrava2
┃➣ ${prefix}Ddd (DDD)
┃➣ ${prefix}Cep (NÚMERO)
┃➣ ${prefix}GerarCPF
┃➣ ${prefix}PremiumList
┃➣ ${prefix}LerFoto (MARCAR)
┃➣ ${prefix}EncurtaLink (LINK)
┃
┗━━━
`
}

exports.menuprem = menuprem