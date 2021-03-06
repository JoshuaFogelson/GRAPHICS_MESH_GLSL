// We will do this together in class (watch the Zoom recording if you missed it!).
precision mediump float;

uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;
uniform mat4 mNormal; // R * S^{-1}

attribute vec3 vertPosition;
attribute vec3 vertColor;
attribute vec3 vertNormal;

varying vec3 fragColor;
varying vec3 fragNormal;

void main(){
    fragColor = vertColor;
    fragNormal = vertNormal;
    gl_Position = mProj * mView * mWorld * vec4(vertPosition, 1.0);
}
