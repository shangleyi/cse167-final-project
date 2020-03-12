#version 330 core
// This is a sample fragment shader.

// Inputs to the fragment shader are the outputs of the same name from the vertex shader.
// Note that you do not have access to the vertex shader's default output, gl_Position.

in vec3 texCoords;
in vec3 tex2dCoords;
in vec3 normals;
uniform samplerCube cubemapTexture;
uniform sampler2D ourTexture;
uniform float background;
// TODO add a uniform float

// You can output many things. The first vec4 type output determines the color of the fragment
out vec4 fragColor;

void main()
{
    // Use the color passed in. An alpha of 1.0f means it is not transparent.
    if (background == 1.0f){
        fragColor = texture(cubemapTexture,texCoords);
    }
    else if(background == 0.0f){
        vec2 tmp = vec2(1.0f * tex2dCoords.x, 1.0f * tex2dCoords.y);
        fragColor = texture(ourTexture,tmp);
    } else if(background == 2.0f) {
        fragColor = vec4(vec3(1.0f), 1.0f);
    } else {
        fragColor = vec4(1.0f);
    }
}