var doc=document,win=window,cd,SZ,nums,clr,ctr,grid,tmp;
var abs=Math.abs,rnd=Math.random,round=Math.round,max=Math.max,min=Math.min;
var ceil=Math.ceil,floor=Math.floor,PI=Math.PI;
var CVS=doc.querySelector("#comp1"),CVS2=doc.querySelector("#comp2");
var C=CVS.getContext("2d"),C2=CVS2.getContext("2d");
var chars=[
	{"head":{"head":{"verts":[[-3.99998474121094,-58],[-64.75,42.75],[-2.25,59.25],[56.5,43.5]],"ins":[[54.9999847412109,0],[0,-4],[-54.9999847412109,0],[0,0]],"outs":[[-49.7500152587891,0],[0,4],[55,0],[0,0]]},"stroke":{"w":2,"style":"#000000ff"},"fill":"#e0ca2bff"},"eyes":{"eye2":{"verts":[[20.1588439941406,-27],[14.6679382324219,-20.842041015625],[22.0556793212891,-14.68408203125],[27.0473937988281,-20.2922515869141]],"ins":[[3.19798278808594,0],[0,-3.52239990234375],[-3.19793701171875,0],[0,3.52235412597656]],"outs":[[-3.19798278808594,0],[0,3.52239990234375],[3.19793701171875,0],[0,-3.52236938476562]]},"eye1":{"verts":[[-26.5597534179688,-27],[-21,-20.842041015625],[-28.4803619384766,-14.68408203125],[-33.53466796875,-20.2922515869141]],"ins":[[-3.23808288574219,0],[0,-3.52239990234375],[3.23802185058594,0],[0,3.52235412597656]],"outs":[[3.23808288574219,0],[0,3.52239990234375],[-3.238037109375,0],[0,-3.52236938476562]]},"fill":"#000000ff"},"nose":{"nose":{"verts":[[-13.25,-10.75],[-3.75,7],[6.125,-10.5]],"ins":[[7,-0.875],[0,0],[-6,7.5]],"outs":[[4.875,6.875],[0,0],[-6.25,-1.25]]},"stroke":{"w":2,"style":"#000000ff"},"fill":"#e73b0fff"}},
	{"head":{"head":{"verts":[[31.7460632324219,-75.154541015625],[22.2460632324219,-62.154541015625],[21.7460632324219,-52.904541015625],[-3.00393676757812,-55.904541015625],[-26.2539367675781,-53.154541015625],[-27.0039367675781,-67.904541015625],[-36.0039367675781,-75.154541015625],[-43.2539367675781,-68.154541015625],[-50.2728576660156,-8.33175659179688],[-52.5039367675781,56.595458984375],[-22.7539367675781,71.345458984375],[-2.25772094726562,70.9066467285156],[16.4960632324219,72.345458984375],[49.9960632324219,51.095458984375],[45.2251586914062,-13.8565063476562],[39.7460632324219,-59.904541015625]],"ins":[[8.25,0],[0,0],[0,0],[12.25,0],[0,0],[0,0],[5.5,0],[0,0],[1.48464965820312,-20.0227355957031],[-1,-5.5],[-21.25,0],[-8.82138061523438,-0.26864624023438],[-3.78768920898438,0],[0.5,4.5],[1.99615478515625,21.6170043945312],[0,0]],"outs":[[-8.25,0],[0,0],[0,0],[-12.25,0],[0,0],[0,0],[-5.5,0],[0,0],[-1.60130310058594,21.5958862304688],[1,5.5],[2.83964538574219,0],[7.48776245117188,0.22802734375],[28.75,0],[-0.5,-4.5],[-1.42134094238281,-15.3921203613281],[0,0]]},"stroke":{"w":2,"style":"#000000ff"},"fill":"#e0c7a3ff"},"body":{"body":{"verts":[[-3.00393676757812,25.845458984375],[-52.5039367675781,56.595458984375],[-22.7539367675781,71.345458984375],[-2.25772094726562,70.9066467285156],[16.4960632324219,72.345458984375],[47.88330078125,58.6732788085938]],"ins":[[28.25,0],[-1,-5.5],[-21.25,0],[-8.82138061523438,-0.26863098144531],[-3.78768920898438,0],[-3.56175231933594,6.28166198730469]],"outs":[[-24.25,0],[1,5.5],[2.83964538574219,0],[7.48776245117188,0.22802734375],[19.0971374511719,0],[1.80032348632812,-3.17512512207031]]},"stroke":{"w":2,"style":"#000000ff"},"fill":"#efe6daff"},"eyes":{"eye2":{"verts":[[16.9869689941406,-32.904541015625],[11.4960632324219,-27.592041015625],[18.8838043212891,-22.279541015625],[23.8755187988281,-27.1177368164062]],"ins":[[3.19798278808594,0],[0,-3.03878784179688],[-3.19793701171875,0],[0,3.03875732421875]],"outs":[[-3.19798278808594,0],[0,3.03878784179688],[3.19793701171875,0],[0,-3.03875732421875]]},"eye1":{"verts":[[-21.8512725830078,-32.904541015625],[-16.2494812011719,-27.592041015625],[-23.7864227294922,-22.279541015625],[-28.8789367675781,-27.1177368164062]],"ins":[[-3.26255798339844,0],[0,-3.03878784179688],[3.26251220703125,0],[0,3.03875732421875]],"outs":[[3.26255798339844,0],[0,3.03878784179688],[-3.26251220703125,0],[0,-3.03875732421875]]},"stroke":{"w":2,"style":"#000000ff"},"fill":"#000000ff"},"nose":{"nose":{"verts":[[-2.25393676757812,-22.029541015625],[-10.2539367675781,-21.154541015625],[-2.62893676757812,-11.904541015625],[4.49606323242188,-21.404541015625]],"ins":[[4.25,0],[0,0],[0,-1.625],[0,0]],"outs":[[-4.25,0],[0,0],[0,-2],[0,0]]},"stroke":{"w":2,"style":"#000000ff"},"fill":"#e090b9ff"}},
	{"head":{"head":{"verts":[[-0.05311584472656,-67.4426116943359],[-71.5912475585938,-57.6311798095703],[-153.415069580078,7.22906494140625],[-58.0572967529297,55.7308197021484],[0.62936401367188,52.8551940917969],[86.2247314453125,52.3325347900391],[152.415069580078,7.68087768554688],[86.3863983154297,-52.6647338867188]],"ins":[[27.5612030029297,0],[29.0791168212891,-7.87034606933594],[0,-30.5772705078125],[-43.4368743896484,-2.35032653808594],[0,0],[-40.8878479003906,6.87495422363281],[0,22.1033782958984],[34.8077545166016,12.8253631591797]],"outs":[[-28.9091186523438,0],[-40.6461181640625,11.0009918212891],[0,33.94580078125],[31.7094573974609,1.71575927734375],[0,0],[34.4510192871094,-5.79264831542969],[0,-22.2504730224609],[-31.7737274169922,-11.7074432373047]]},"fill":"#31CF23"},"eye1":{"eye1":{"verts":[[-108.240753173828,-10.3888549804688],[-95.8178100585938,2.25996398925781],[-112.532318115234,14.9087677001953],[-123.825897216797,3.38932800292969]],"ins":[[-7.23524475097656,0],[0,-7.23524475097656],[7.23524475097656,0],[0,7.2352294921875]],"outs":[[7.23524475097656,0],[0,7.2352294921875],[-7.2352294921875,0],[0,-7.23524475097656]]},"fill":"#000"},"eye2":{"eye2":{"verts":[[107.830932617188,-10.3888549804688],[95.6083679199219,2.25996398925781],[112.053253173828,14.9087677001953],[123.164703369141,3.38932800292969]],"ins":[[7.11854553222656,0],[0,-7.23524475097656],[-7.11856079101562,0],[0,7.2352294921875]],"outs":[[-7.11854553222656,0],[0,7.2352294921875],[7.11856079101562,0],[0,-7.23524475097656]]},"fill":"#000"},"mouth":{"mouth":{"verts":[[-72.2707061767578,17.2239532470703],[-74.4729461669922,24.5083160400391],[-62.1629486083984,25.072998046875],[-58.0972595214844,32.0750122070312],[-52.0551910400391,26.9364318847656],[-46.3519439697266,26.8799743652344],[-44.5449676513672,35.0113525390625],[-38.6158294677734,27.4446563720703],[-33.9854736328125,27.5011138916016],[-29.5809631347656,34.8984069824219],[-23.7082824707031,27.6140594482422],[-18.6826782226562,27.4446563720703],[-13.2617492675781,33.5996551513672],[-7.16319274902344,28.2351989746094],[6.3890380859375,28.2351989746094],[12.4876403808594,33.5996551513672],[17.9085388183594,27.6140594482422],[22.9341888427734,27.6705169677734],[28.9197998046875,34.5596008300781],[32.6466217041016,29.0822143554688],[33.2677917480469,27.3317108154297],[37.6722717285156,27.4446563720703],[43.9967041015625,34.6725463867188],[46.0860137939453,26.8235015869141],[51.9586791992188,27.0493774414062],[56.9843139648438,31.7926788330078],[58.9042358398438,30.2680511474609],[62.0664367675781,25.072998046875],[72.1741790771484,24.8471221923828],[74.3764343261719,23.3224945068359],[72.6824035644531,17.5063018798828],[70.3672180175781,17.1674957275391],[27.6774597167969,17.9015655517578],[-0.04823303222656,16.7157440185547],[-38.2205810546875,18.0709838867188]],"ins":[[2.37165832519531,0],[-1.31343078613281,-0.11257934570312],[0,0],[-1.80697631835938,-1.58110046386719],[-2.03285217285156,0.45175170898438],[0,0],[-1.58110046386719,-3.16220092773438],[0,0],[-0.84700012207031,-1.07289123535156],[-1.80697631835938,-1.07289123535156],[-0.56463623046875,0.11293029785156],[-0.28233337402344,-0.05647277832031],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.16943359375,0.50820922851562],[-0.45179748535156,0.22587585449219],[0,0],[0,0],[0.62115478515625,4.23509216308594],[0,0],[-0.62113952636719,-1.91990661621094],[-0.28233337402344,0.33880615234375],[0,0],[-1.18583679199219,0.16940307617188],[0,0.73408508300781],[0.50822448730469,0.39527893066406],[0.62115478515625,0],[8.01840209960938,0],[0,0],[15.8110046386719,0]],"outs":[[-1.27397155761719,0],[1.97636413574219,0.16940307617188],[0,0],[3.16220092773438,-3.61393737792969],[2.0328369140625,-0.45173645019531],[0,0],[2.71044921875,-3.89628601074219],[0,0],[0.84701538085938,1.07289123535156],[3.04927062988281,-3.78334045410156],[0.56463623046875,-0.11294555664062],[0.28233337402344,0.05645751953125],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.16943359375,-0.50820922851562],[0.45179748535156,-0.22587585449219],[0,0],[0,0],[2.59751892089844,-0.56468200683594],[0,0],[1.46817016601562,-0.16940307617188],[0.28233337402344,-0.33882141113281],[0,0],[1.18583679199219,-0.16940307617188],[0,-0.73408508300781],[-0.50822448730469,-0.39527893066406],[-0.62115478515625,0],[-8.01838684082031,0],[0,0],[-15.8109893798828,0]]},"fill":"#fff"}
	}
];
function normInt(s){ return parseInt(s,32)-SZ }
function d2r(n){ return n*PI/180 }
function to1(n){ return n/255 };
function to1N(n){ return n/128-1 };
function getNums2(){
	var hashSingles=[],seed,rvs,i=0;
	seed = parseInt( tokenData.hash.slice(0,16), 16 );
	for(i=0;i<64;i++) hashPairs.push(tokenData.hash.charAt(i));
	rvs = hashPairs.map(n=>parseInt(n,16));
	return rvs;
}
function getNums(){
	var hashPairs=[],seed,rvs,i=0;
	seed = parseInt( tokenData.hash.slice(0,16), 16 );
	for(i=0;i<32;i++){
		hashPairs.push(
			tokenData.hash.slice( 2+(i*2),4+(i*2) )
		);
	}
	rvs = hashPairs.map(n=>parseInt(n,16));
	return rvs;
}
function clear( C ){ C.clearRect(0,0,SZ,SZ) }
function canvasAction( callback ){
	C.save();
	C2.save();
	C.beginPath();
	callback( [].slice.call(arguments,1) );
	C.restore()
	C2.restore();
}
function addShape(shape, s, o, C){
	var vs = shape.verts;
	var l = vs.length;
	var is = shape.ins || null;
	var os = shape.outs || null;
	var x = (o?o[0]:0), y = (o?o[1]:0);
	var ax, ay, bx, by, cx, cy;
	var i,j,k;
	C.beginPath();
	C.moveTo( x+vs[l-1][0]*s[0], y+vs[l-1][1]*s[1] );
	for( i=l; i<=l*2+(0); i++ ){
		j = (i-1)%l, k = i%l;
		os ? ax = x+(vs[j][0]+os[j][0])*s[0]:null;
		os ? ay = y+(vs[j][1]+os[j][1])*s[1]:null;
		is ? bx = x+(vs[k][0]+is[k][0])*s[0]:null;
		is ? by = y+(vs[k][1]+is[k][1])*s[1]:null;
		cx = x+vs[k][0]*s[0];
		cy = y+vs[k][1]*s[1];
		if ( is && os ){
			C.bezierCurveTo( ax, ay, bx, by, cx, cy );
		} else {
			C.lineTo( cx, cy );
		}
	}
}
function renderLayer( layer, s, o, C ){
	var shape,path,p,q;
	for( p in layer ){
		shape = layer[p];
		for( q in shape ){
			if ( !q.match(/stroke|fill/) ){
				addShape( shape[q], s, o, C );
				C.lineJoin = "round";
				C.fillStyle = shape.fill;
				if ( shape.stroke ){
					C.lineWidth = shape.stroke.w;
					C.strokeStyle = shape.stroke.style;
				}
				C.fill();
				C.stroke();
			}
		}
	}
}
function addBG(){
	var grad = C.createRadialGradient( SZ/2, SZ/2, 1, SZ/2, SZ/2, SZ/2 ),i;
	for(i=0;i<2;i++) grad.addColorStop( i, clr.bg[i] );
	C.fillStyle = grad;
	C.fillRect( 0, 0, SZ, SZ );
}
function setRare(){
	for (var p in rares) rares[p] = true;
	main();
}
function handleKeyPress(){
	switch (event.charCode){
	case 32: // spacebar
		setRare();
		break;
	default:
		break;
	}
}
function drawBG(){
	clear( C );
	C.fillStyle = tmp || clr.bg[nums[5]%clr.bg.length];
	C.fillRect(0,0,SZ,SZ);
}
function cellIsTaken( ix, iy ){ return cd.taken[ix+iy] }
function getCellData(){
	var i = cd.taken.length || 0,j=0;
	var x,y,ix,iy,lastx,lasty;
	while( cd.drawn < cd.nchars * floor(cd.nchars/2) ){
		x = floor( nums[(i+j)%32]/2 ) % floor( cd.nchars/2 )+1;
		y = floor( nums[(i+j+1)%32] ) % cd.nchars;
		ix = x.toString();
		iy = y.toString();
		lastx = grid.x.length-1;
		lasty = grid.y.length-1;
		if ( cd.taken[ix+iy] !== true ){
			cd.taken[ix+iy] = true;
			cd.drawn++;
			return [ grid.x[x], grid.y[y], {
				left: grid.x[abs(x-1)],
				right: grid.x[(x+1>lastx?x-1:x+1)],
				up: grid.y[max(0,y-1)],
				down: grid.y[(y+1>lasty?y-1:y+1)]
			}];
		}
		j++;
	}
}
function getSize( data ){
	return abs(Math.min.apply(
		Math,
		[
			data[0] - data[2].left,
			data[2].right - data[0],
			data[1] - data[2].up,
			data[2].down - data[1]
		]
	)) / (SZ*0.33);
}
function transWithAnchor( x, y, C, callback ){
	C.translate( x, y );
	callback( [].slice.call(arguments,3) );
	C.translate( x*-1, y*-1 );
}
function drawChar( args ){
	var data = getCellData() || [SZ/2,SZ/2];
	var x1=data[0], x2=SZ-data[0], y=data[1];
	var sz = 4/cd.nchars, rot=( round(x1)===SZ/2 ? 0 : args[3]*PI/180 );
	console.log( x1 );
	var n=args[0], idx=args[2]%(nums.length-1);
	if ( n === 2 ) sz/=1.5;
	transWithAnchor( x1, y, C, ()=>{
		C.rotate( rot );
		renderLayer( chars[n], [sz,sz], [0,0], C );
		C.rotate( rot * -1 );
	});
	transWithAnchor( x2, y, C, ()=>{
		C.rotate( rot * -1 );
		renderLayer( chars[n], [sz,sz], [0,0], C );
		C.rotate( rot );
	});
}
function buildGrid(){
	var n = cd.nchars;
	var xArr=[], yArr=[], step=SZ/(n+1), i;
	var xStep = SZ/n, yStep = SZ/(n+1);
	for(i=0;i<=floor(n/2);i++){
		xArr.push( yStep + yStep*i );
		// xArr.push( to1(nums[i%32]) * step + step*i );
	}
	for(i=0;i<n;i++){
		yArr.push( yStep + yStep*i );
		// yArr.push( to1(nums[(i*3)%32]) * step + step*i );
	}
	grid = { x: xArr, y: yArr, used: false };
}
function showGrid(){
	C.strokeStyle = "black";
	C.lineWidth = 1, i;
	for(i=0;i<grid.y.length;i++){
		C.beginPath();
		C.moveTo( 0, grid.y[i] );
		C.lineTo( SZ, grid.y[i] );
		C.stroke();
	}
	for(i=0;i<grid.x.length;i++){
		C.beginPath();
		C.moveTo( grid.x[i], 0 );
		C.lineTo( grid.x[i], SZ );
		C.moveTo( SZ-grid.x[i], 0 );
		C.lineTo( SZ-grid.x[i], SZ );
		C.stroke();
	}
}
function updateBG(el){
	tmp = el.value;
	render();
}
function render(){
	clear( C );
	canvasAction( drawBG, 0 );
	// canvasAction( showGrid );
	var n = cd.nchars, i;
	var sz = to1(nums[1])*2;
	for(i=0;i<n;i++){
		canvasAction(
			drawChar,
			nums[i]%chars.length,
			sz, i,
			nums[(i+2)%nums.length]%90
		);
	}
}
function init(){
	nums = getNums();
	SZ = 800;
	ctr = [SZ/2,SZ/2];
	CVS.setAttribute( "width", SZ );
	CVS.setAttribute( "height", SZ );
	CVS2.setAttribute( "width", SZ );
	CVS2.setAttribute( "height", SZ );
	clr = {
		bg: [ "#eee", "#b0dceb", "#ebbfb0", "#dcb0eb", "#e6ebb0" ],
		char: [ "#dfd319", "#20e272" ]
	}
	cd = {
		lwidth:SZ/128, soff:0.1, poff:0.03,
		nchars: (nums[0]%6+2)*2-1, taken: {}, drawn:0
	}
	buildGrid();
}
function main(){
	init();
	render();
}
main();
