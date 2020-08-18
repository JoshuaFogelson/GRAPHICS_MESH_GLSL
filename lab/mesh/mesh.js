/*
	The Mesh class will house the transform and model data for a 3D model.
	It is very similar to the "Drawable" class from a previous lab,
	which you should use as an example:
	https://github.com/arewhyaeenn/GRAPHICS_2D_WORLD/blob/master/lab/drawables/drawable.js

	The primary difference between these two classes is that Mesh is 3D whereas Drawable was 2D, so:
		- Each vertex position is 3 floats, not 2
		- Each vertex also has a normal attribute (3 floats representing the normal vector)
		- An extra transformation is included for normal vectors (which we discussed in lecture).
		  It has been included in this lab's Transform class; you don't need to implement it or
		  maintain it, but you will need to pass it into the shader (like you pass in the world
		  matrix) when drawing.
		- The world matrix is 4x4, meaning you'll need to use UniformMatrix4fv when plugging it in
		  (Drawable uses UniformMatrix3fv, because its world matrix is 3x3).
		  The normal matrix is 3x3, because it does not need to encode translation.
*/

class Mesh extends Transform
{
	/*
		Set up transform.
		Set up WebGL references.
		Create and populate position, normal and index buffers.
		Store index length.
		Store position and normal attribute locations ("vertPosition" and "vertNormal" in shader).
		Store world matrix and normal matrix uniform locations ("mWorld" and "mNormal" in the shader).
	*/
	constructor(gl, program, positionArray, normalArray, indexArray, position=new Vector(), rotation=new Quaternion(), scale=new Vector(1,1,1))
	{
		// TODO
	}


	/*
		Update transform.
		Use this mesh's shader.
		Bind index array to element array buffer.
		Enable position and normal attribute arrays and set up attribute pointers.
		Plug in uniform data (mNormal and mWorld).
	*/
	activate()
	{
		// TODO
	}


	/*
		Call activate.
		Draw elements (GPU go burrrrrr).
		Call deactivate.
	*/
	draw()
	{
		// TODO
	}


	/*
		Unbind buffers.
		Disable attribute arrays.
	*/
	deactivate()
	{
		// TODO
	}
}