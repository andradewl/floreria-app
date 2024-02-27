
export const stylesComponents = {

    //------------------------------Barra de navegacion------------------------------//
    appBar:{
        backgroundColor: '#ffff',
        boxShadow:'none',
        padding:'15px 30px 15px 30px',
        position:"sticky"
    },
    toolbar:{
        display:'flex',
        justifyContent: 'space-around',
    },

    boxMenuResponsive:{
        display: {
            xs: 'flex',
            md: 'none'
        }
    },
    MenuResponsive:{
        display: {
            xs: 'block',
            md: 'none'
        }

    },
    boxMenuDesk:{
        display: {
            xs: 'none',
            md: 'flex'
        }
    },
    navigationButton:{
        m: 2,
        color: '#B42981',
        display: 'block',
        fontSize:'15px'
    },
    logoResponsive:{
        width: 150,
        display: {
            xs: 'flex',
            md: 'none'
        },
        justifyContent:{
            md:'center'
        }
    },
    iconsMovile:{
        padding:'3px',
        fontSize: 30
    },

    //------------------------------Footer------------------------------//

    BoxFooter:{
        backgroundColor: '#dbb2da',
        padding:'20px',
        marginTop:'5px'
    },

    //------------------------------titulos banner------------------------------//
    titlesBanners:{
        color:'#ffff',
        fontFamily:'Archivo Black, sans-serif',
        fontSize:{
            md:'74px',
            sm:'50px',
            xs:'40px'
        }
    },

    titles3Banners:{
        color:'#ffff',
        fontFamily:'Archivo Black, sans-serif',
        fontSize:{
            md:'29px',
            sm:'25px',
            xs:'20px'
        }
    },

    //------------------------------boton para banners------------------------------//

    buttonBanners:{
        border:'2px solid #b42981',
        backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)',
        margin: '10px',
        textTransform: 'uppercase',
        transition: '0.5s',
        color: 'white',
        borderStyle:'none',
        borderRadius:'50px',
        fontFamily:'Archivo Black, sans-serif',
        padding:'10px'
    },
    //------------------------------Boton Global------------------------------//
    button:{
        border:'2px solid #b42981',
        backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)',
        textTransform: 'uppercase',
        transition: '0.5s',
        color: 'white',
        borderStyle:'none',
        borderRadius:'50px',
        fontFamily:'Archivo Black, sans-serif',
        padding:'10px',
        width:'200px'
    },

    //------------------------------Contenedor ocasiones------------------------------//

    megaContenedorOcasiones:{
        paddingLeft:{
            xs:'10px',
            md:'50px'
        },
        paddingRight:{
            xs:'10px',
            md:'50px'

        }
    },

    contenedorOcasiones:{
        textAlign:'center',
        justifyContent:'center',
        alignContent:'center'
    },

    cajaDatosOcasioners:{
        justifyContent:'center',
        maxWidth:'100%',
        display:'flex',
        position: 'relative',
    },

    contenedorImagen:{
        width:'100%',
        height:{
            xs:'319px'
        }
    },

    animacionTextoSobreImagenOcasiones:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to right, rgba(255, 100, 100, 0.7) 0%, rgba(255, 100, 100, 0.7) 51%, rgba(255, 129, 206, 0.7) 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease','&:hover': {
            opacity: 1,
        },
    },

    letraSobreImagen:{
        color:'white',
        fontFamily:'Archivo Black, sans-serif'
    },


    //------------------------------Productos------------------------------//

    ContenedorProductos:{
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        paddingLeft:{
            xs:0,
            sm:3,
            md:6,
            xl:15
        },
        paddingRight:{
            xs:0,
            sm:3,
            md:6,
            xl:15
        },
        paddingBottom:{
            xs:4,
            xl:15
        },
        paddingTop:{
            xs:4,
            xl:15
        }
    },

    contenedorProducto:{
        padding:{
            xs:2,
            sm:5,
            md:2,
            xl:1
        },
    },

    //------------------------------Filtros------------------------------//

    espaciadoOrdenFiltro:{
        padding:'10px'
    },

    botonFiltro:{
        border:'2px solid #b42981',
        backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)',
        textTransform: 'uppercase',
        transition: '0.5s',
        color: 'white',
        borderStyle:'none',
        borderRadius:'50px',
        fontFamily:'Archivo Black, sans-serif',
        padding:'6px',
        width:'170px'
    }


};