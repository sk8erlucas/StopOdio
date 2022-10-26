console.log('cargando animaciones')

gsap.registerPlugin(ScrollTrigger);

function initHeader(){
const tl = gsap.timeline({duration:1.7});

tl
	.from(
	'body',{
		backgroundColor:'#1D1D1D',
		ease:'none'
	}
	)
	.fromTo(
		['.logo', '.burger', '.main-nav'],{
			opacity:0,
			y:-20,
		},{
			opacity: 1,
			y:0,

			ease:'power2.out',
			stagger: 0.2,
			duration:2
		},
		'1=-'
	)
	.fromTo('.hero__image',{
		opacity:0,
	},{
		opacity:1,
		ease:'ease',
	},'intro')
	.fromTo(
		'.hero__text h1 span',{
			opacity:0,
			y:-20,
		},{
			opacity: 1,
			y:0,
			ease:'power4.out',
			stagger: 0.5
		},'intro'
	)
	.fromTo(
		['.subtitle', '.btn' ],{
			opacity:0,
			x:-20,
		},{
			opacity: 1,
			x:0,
			ease:'power4.out',
		}
	)
}
	
function initMarquee(){
	gsap.fromTo('.marquee',
		{
			
			opacity: 0,
		},
		{
			opacity: 1,
			duration:1,
			ease:'Power1.easeInOut',
			scrollTrigger:{
				trigger:'.slides-inner',
				start: 'bottom bottom-=480',
				end: 'bottom 90%',
				scrub: true,

				
		}
		}
		
		
	)
}
	
function init(){
    initHeader();
    initMarquee();
    // start here

}

window.addEventListener('load', function(){
    init();
});

