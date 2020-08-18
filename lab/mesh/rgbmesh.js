/*
	RGBMesh is to Mesh as MultiColorDrawable is to Drawable:
	https://github.com/arewhyaeenn/GRAPHICS_2D_WORLD/blob/master/lab/drawables/drawable.js

	It is essentially Mesh, with an additional attribute (color).
*/

class RGBMesh extends Mesh
{
	/*
		Set up Mesh with appropriate args (all of them but the colorArray).
		Store attribute location for color ("vertColor" in shader).
		Create and populate buffer for color attribute.
	*/ 
	constructor(gl, program, positionArray, normalArray, colorArray, indexArray, position=new Vector(), rotation=new Quaternion(), scale=new Vector(1,1,1))
	{
		// TODO
	}


	/*
		Call Mesh's activate.
		Enable color attribute array and set up color attribute pointer.
	*/
	activate()
	{
		// TODO
	}


	/*
		Call Mesh's deactivate.
		Disable the color vertex attribute array.
	*/
	deactivate()
	{
		// TODO
	}
}