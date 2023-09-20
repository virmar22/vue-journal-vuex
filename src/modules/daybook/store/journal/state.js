
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), 
            date: new Date().toDateString(),
            text: 'Un párrafo, también llamado parágrafo (del griego παράγραφος [parágraphos], y este de παρα, «próximo, semejante», y γραφος, «escritura»), es una unidad comunicativa del lenguaje escrito compuesta por un conjunto de oraciones que tienen cierta unidad temática o que, sin tenerla, se enuncian juntas.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, 
            date: new Date().toDateString(),
            text: 'Anim aliquip officia ut anim dolore sint et.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, 
            date: new Date().toDateString(),
            text: 'Irure aute nulla culpa velit laborum velit laboris nisi pariatur Lorem eu occaecat nostrud.',
            picture: null,
        }
    ]
})