const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowChildren = addKeyword(['🟩 CHILDREN (6 a 9 años)','children', '6 años', '7 años', '8 años', '9 años'])
    .addAnswer(
        [
            '🟩 CHILDREN (6 a 9 años) 🇵🇪 S/. 49 ',

            '',
            '🇺🇸Haz que tú niñ@ aprenda inglés de manera divertida y participativa 🇺🇸',
            
            '',
            '💰Inversión: (Pago Mensual)',
            '🇵🇪 S/. 49',
            '',
            
            '👩‍💻 Clases 100% en vivo',
            
            '',
            '💻 Acceso a clases grabadas',
            
            '',
            '📚Material gratuito cada mes (PDF)',
            
            '',
            '🥇Certificado al finalizar el curso completo (Certificado digital al correo)',
            
            '',
            '🎓Duración del curso: 24 meses',
            
            '',
            '❗️Vacantes limitadas (Máximo 15 estudiantes por sala)',
            '',
            'Video modelo:',
            'Click👇',
            'https://www.facebook.com/EnglishCornerABC/videos/817705499009928/',
            
            '',
            '',
            'Tenemos los siguientes horarios:',
            '',
            '🟩 CHILDREN (6 a 9 años) ',
            '',
            
            '   ✅ Lunes, Miercóles y Viernes 6:00 PM a 7:00 PM',
            '🗓INICIO DE CLASES:   3 de Abril 2023',
        
        ]

        )

const flowJunior = addKeyword(['🟪 JUNIOR (10 a 14 años)','Junior', '10 años', '11 años', '12 años', '13 años', '14 años'])
    .addAnswer(
        [

            '🟪 JUNIOR (10 a 14 años) 🇵🇪 S/. 49 ',

            '',
            '🇺🇸Haz que tú niñ@ aprenda inglés de manera divertida y participativa 🇺🇸',
            
            '',
            '💰Inversión: (Pago Mensual)',
            '🇵🇪 S/. 49',
            '',
            
            '👩‍💻 Clases 100% en vivo',
            
            '',
            '💻 Acceso a clases grabadas',
            
            '',
            '📚Material gratuito cada mes (PDF)',
            
            '',
            '🥇Certificado al finalizar el curso completo (Certificado digital al correo)',
            
            '',
            '🎓🎓Duración del curso completo: 30 meses',
            '- Básico: 12 meses ',
            '- Intermedio: 12 meses',
            '- Avanzado: 6 meses',
            
            '',
            '❗️Vacantes limitadas (Máximo 15 estudiantes por sala)',
            '',
            'Video modelo:',
            'Click👇',
            'https://www.facebook.com/EnglishCornerABC/videos/817705499009928/',
            
            '',
            '',
            'Tenemos los siguientes horarios:',
            '',
            '🟪 JUNIOR (10 a 14 años)',
            '',
            
            '   ✅ Lunes, Miercóles y Viernes 7:00 PM a 8:00 PM',
            '🗓INICIO DE CLASES:   3 de Abril 2023',
            
        ]

        )

const flowJRegular = addKeyword([,'🟦 REGULAR (15 años a más)','Regular', '15 años', '16 años', '17 años', '18 años', 'adulto'])
    .addAnswer(
        
        [
            '🟦 PROGRAMA JÓVENES Y ADULTOS (15 años a más) 🇵🇪 S/. 49 ',

            '',
            '🇺🇸Haz que tú niñ@ aprenda inglés de manera divertida y participativa 🇺🇸',
            
            '',
            '💰Inversión: (Pago Mensual)',
            '🇵🇪 S/. 49',
            '',
            
            '👩‍💻 Clases 100% en vivo',
            
            '',
            '💻 Acceso a clases grabadas',
            
            '',
            '📚Material gratuito cada mes (PDF)',
            
            '',
            '🥇Certificado al finalizar el curso completo (Certificado digital al correo)',
            
            '',
            '🎓Duración del curso: 30 meses',
            '- Básico: 10 meses ',
            '- Intermedio: 10 meses',
            '- Avanzado: 10 meses',
            
            '',
            '❗️Vacantes limitadas (Máximo 15 estudiantes por sala)',
            '',
            'Video modelo:',
            'Click👇',
            'https://www.facebook.com/EnglishCornerABC/videos/817705499009928/',
            
            '',
            '',
            'Tenemos los siguientes horarios:',
            '',
            '🟦 REGULAR (15 años a más)',
            '',
            
            '   ✅ Lunes, miércoles y viernes de 8 a 9 pm',
            '🗓INICIO DE CLASES:   3 de Abril 2023',
        
        ]
    
        )


// const flowPrincipal = addKeyword(['hola','info','informacion' ])
//     .addAnswer('🙌  Bienvenido a *English Corner*')
//     .addAnswer(
//         [
//             'Hola, mucho gusto, Somos del equipo de English Corner.',
//             '¿De qué curso deseas información?',
//             '',
//             '',
//             '🟩 Children (6 a 9 años)',
//             '',
//             '🟪 Junior (10 a 14 años)',
//             '',
//             '🟦 Regular (15 años a más)',
//             '',
            

//         ],
//         null,
//         null,
//         [flowChildren, flowJunior, flowJRegular]
//     )

    const flowHola = addKeyword(['hola'])
    .addAnswer(
        [
        '🙌  Bienvenido a *English Corner*',
        'Hola, mucho gusto, Somos del equipo de English Corner.',
        '',
        ]
        )
    .addAnswer(
            '¿De qué curso deseas información?',
            
            { buttons: 
                [
                    { body: '🟩 CHILDREN (6 a 9 años)' }, 
                    { body: '🟪 JUNIOR (10 a 14 años)' }, 
                    { body: '🟦 REGULAR (15 años a más)' }
                ],

            }
            // ,null,
            // null,
            // [flowChildren, flowJunior, flowJRegular]
            )
       

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowHola, flowChildren, flowJunior, flowJRegular])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
