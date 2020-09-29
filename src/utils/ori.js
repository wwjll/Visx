(function(e) {
    function t(t) {
        for (var a, r, o = t[0], l = t[1], c = t[2], d = 0, m = []; d < o.length; d++)
            r = o[d],
            s[r] && m.push(s[r][0]),
            s[r] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        u && u(t);
        while (m.length)
            m.shift()();
        return i.push.apply(i, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== s[l] && (a = !1)
            }
            a && (i.splice(t--, 1),
            e = r(r.s = n[0]))
        }
        return e
    }
    var a = {}
      , s = {
        app: 0
    }
      , i = [];
    function r(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r),
        n.l = !0,
        n.exports
    }
    r.m = e,
    r.c = a,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                r.d(n, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var c = 0; c < o.length; c++)
        t(o[c]);
    var u = l;
    i.push([0, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "01b3": function(e, t, n) {
        e.exports = n.p + "assets/img/compas-buenaventura.e1e4db11.jpg"
    },
    "01fd": function(e, t, n) {},
    "0209": function(e, t, n) {
        "use strict";
        var a = n("01fd")
          , s = n.n(a);
        s.a
    },
    "047f": function(e, t, n) {
        e.exports = n.p + "assets/img/man-water.764259c9.jpg"
    },
    "056b": function(e, t, n) {
        e.exports = n.p + "assets/3d/111e34635407802b690f3c0bc5ebe75e.glb"
    },
    "071b": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAA0CAMAAAAzKDQZAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAL3UExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xjeeXgAAAD8dFJOUwAWQfwUJBuAQ/e7v2cqw3N0gmGuPbIBIYO52PgOk6MHINq82W8EgfqxtAOWwoalWZ4jmP4+fjNwBXyU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"
    },
    "0bd7": function(e, t, n) {},
    "0c2e": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "0e7d": function(e, t, n) {
        "use strict";
        var a = n("64f7")
          , s = n.n(a);
        s.a
    },
    "15ab": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec2 screenSize;\n\nvarying vec2 vUv;\n\nvoid main()\n{\n    vUv = uv;\n    gl_Position = vec4(position.xy, 1.0, 1.0);\n}"
    },
    1618: function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// Soletanche\nvarying vec3 vWorldPosition;\n\nvoid main()\n{\n   \t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n}"
    },
    "184c": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform sampler2D map;\nuniform vec3 uColor;\n\nuniform vec2 screenSize;\n\n#ifdef USE_MAP\n    varying vec2 vUv;\n#endif\n\nvoid main()\n{\n    // RGB offset\n    vec2 onePixel = vec2(1.0, 1.0) / screenSize;\n\n    #ifdef USE_MAP\n        vec4 color = texture2D(map, vUv);\n    #else\n        vec4 color = vec4(uColor, 1.0);\n    #endif\n\n    gl_FragColor = color;\n}"
    },
    "19f9": function(e, t, n) {
        e.exports = n.p + "assets/img/logo-small-white-5x.762a17f5.png"
    },
    "1d31": function(e, t, n) {},
    2010: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "236c": function(e, t, n) {},
    "23e0": function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// Soletanche\nvarying vec2 vUv;\n\nuniform vec2 cloudDirection;\nuniform vec2 cloudScale;\nuniform float time;\n\nvoid main()\n{\n   \t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n\tvUv = uv / cloudScale + cloudDirection * time;\n}"
    },
    2753: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOGZlZTI4MS1iZDI3LTRmODgtOTA3Yy02ZjVhNzYxMjM1MjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZGOEExRDY0OEMwMTFFOTlGODRBMEI0MjNDOUE2MjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZGOEExRDU0OEMwMTFFOTlGODRBMEI0MjNDOUE2MjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YWY0ZTQ2Mi0xM2YyLTQ3ZTUtOTYxYi0wM2I0Y2UyNDUwOTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzhmZWUyODEtYmQyNy00Zjg4LTkwN2MtNmY1YTc2MTIzNTIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KgBhSQAAArlJREFUeNqsV+uZnDAMZIDeU0ZKSgNpBU94yPJYltnLfcefXWxL1mtGAr/+/P2NpT20X5yLPF98T965zJ9sH0H3s4bznct+al2ZiJIqhLoA2hKr4l7M9zuHnjPdSdrfneQ22hcfzlcpxsi/7tyL6tOAsvVuyH+GdciN+m7h7KxyGQadll+PQLkiwMxbuWnpFXTb7iOS/2JQPHJv4jSgrHp1LEhM9mIqMAtiJ8dh/zJg04OlIiDmT+KAmIVLrvToyWpFYVF17IVnBJ7b0QKzxGKFlERDJzzgtCpX2YDr9n4ZWUzzzqNsHsKJgIcMSV5i2PECnsolIr+XOwXuwNIjGnMXxLgGfhrBZOyjLAZTzQuGxxpI4lMdDn5Kab2ySXbeU/CTD75myIOCmoI7JuC7CjtTkTAWjiWhJtoPZkVAq4HjWL/jJV8c5tcCAYvAsel5qCdWnPASE/wl/U1JGa8wajv7cpRNI6xtgEkQffu0TDNSbyiWyYIEUAnQrwisWcT6akDirfZAptSgZ6ENKxYh6onYXZ0KMXJ/Y9gmR4l8UjMi5xE7YXis/ASmpJxSsqnNZKYjmQ1iM9KcOzZVTWTThGQUnJTeBtn36a7BEHPMSD/ylDCpap2LNCwMJKu1cM8D7qLoBKQbaCYgiX84h7ruvQHucsUxDDENEa0ZTUeHfFYKxckQL4ZoDfI6kDQYtnE5XsFukB5JCB1x5XU7Etyz1o1kWTfT6PMDLfM/9VAMQKNPxklqVvE/8jgMBw9CpL86sM6Zf0mHjnsmRDLOP5X+ZIsMRg3DpmU17JehgYw0+sAwlgiXgFe+E0XFsBldZo2bI+FcHyarD3WwSznp8m+Dq88bE2KHfI+g/zRbL7K9AUbp/MTnT0Rm056WcmMhTuB0fZyu9OPsWAD9nDsUIJNyqxjX1YyU6/NPgAEApRsYgKDzJCkAAAAASUVORK5CYII="
    },
    "28b3": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAL3UExURQAAAP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xjeeXgAAAD8dFJOUwCW9uZJNAJbBMkz/SUBFjbzQRIP+QMt9f4q5x119Mf7spXfIhAXBsSoaVKaHDphQwoy5D7yi/BaNcMv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"
    },
    "28ef": function(e, t, n) {
        e.exports = n.p + "assets/img/logo-white-2x.4b8af7e4.png"
    },
    "2b44": function(e, t, n) {
        e.exports = n.p + "assets/img/arrow-next-white.e6056e2b.svg"
    },
    3345: function(e, t, n) {
        e.exports = n.p + "assets/img/video-play-white.70e9dd56.svg"
    },
    "33c2": function(e, t, n) {
        "use strict";
        var a = n("61b2")
          , s = n.n(a);
        s.a
    },
    3493: function(e, t, n) {
        e.exports = n.p + "assets/img/dam-01.20e9aee3.jpg"
    },
    "37c3": function(e, t, n) {},
    3852: function(e, t, n) {
        e.exports = n.p + "assets/img/video-cover.47396df9.jpg"
    },
    "3a6f": function(e, t, n) {
        e.exports = n.p + "assets/img/men.024dd818.jpg"
    },
    "3c24": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAD9JREFUeNq00rsNACAMQ0H82X8sKmrmgRVeEfcn2VG0z10klcSAjYEZCAYNBIGg45U6vgGf1Rxo9vlYn58nwABbvwMHmY6RDQAAAABJRU5ErkJggg=="
    },
    "3ce9": function(e, t, n) {
        "use strict";
        var a = n("5883")
          , s = n.n(a);
        s.a
    },
    4116: function(e, t, n) {},
    4119: function(e, t, n) {
        "use strict";
        var a = n("0bd7")
          , s = n.n(a);
        s.a
    },
    "437c": function(e, t, n) {
        e.exports = n.p + "assets/3d/9a8832c33bdde69177f3df8e43e034c1.glb"
    },
    "44a4": function(e, t, n) {
        "use strict";
        var a = n("4116")
          , s = n.n(a);
        s.a
    },
    "47a3": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform sampler2D map;\n\nuniform vec2 screenSize;\nvarying vec2 vUv;\n\nvoid main()\n{\n    gl_FragColor = texture2D(map, vUv);\n}"
    },
    "4a95": function(e, t, n) {},
    "4aad": function(e, t, n) {},
    "4bf7": function(e, t) {
        e.exports = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex \n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n// \n\nvec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{ \n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n    // Permutations\n    i = mod289(i); \n    vec4 p = permute( permute( permute( \n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients: 7x7 points over a square, mapped onto an octahedron.\n    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n    float n_ = 0.142857142857; // 1.0/7.0\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\n#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// Soletanche\nuniform float time;\nuniform float wavePower;\nuniform float waveVelocity;\n// uniform vec2 waveDistance;\nuniform float causticOpacity;\nuniform float noGradient;\n\nuniform sampler2D waveMap;\nuniform sampler2D waterCausticMap;\nuniform sampler2D gradient;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nvec2 getWaveUV(vec2 pos, float time)\n{\n    float zoom1 = 32.245454;\n    float zoom2 = 95.145446;\n    pos *= zoom2;\n\n    float power = cos(vPosition.x - vPosition.y) * 0.25 + 0.25; // 0.0 -> 0.5\n    float dist = sin(vPosition.x - vPosition.y) * 0.5 + 0.5;\n    float angular = time * 0.1556 + vPosition.y;\n\n    return vec2(\n        sin(pos.x) * 0.5 + 0.5,\n        cos(pos.y) * 0.5 + 0.5\n    );\n}\n\nvoid main()\n{\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\tvec4 gradiantColor = texture2D(gradient, vUv * vec2(1.0, -1.0));\n\toutgoingLight = mix(gradiantColor.rgb, outgoingLight, gradiantColor.w);\n\n    // Caustics\n    float size = 20.0;\n    vec2 transformed = vec2(\n\t\tsnoise(vec3(vPosition.xz * size, time * 0.1)) * 0.1,\n\t\tsnoise(vec3(vPosition.zx * size, time * 0.1)) * 0.1\n\n        // snoise(vec3(vPosition.xyz * size) + vec3(0.0, 0.0, time * 0.1)) * 0.1,\n\t\t// snoise(vec3(vPosition.zxy * size) + vec3(0.0, 0.0, time * 0.1)) * 0.1\n\t);\n    vec3 caustic = texture2D(waterCausticMap, transformed).rgb * gradiantColor.w;\n    float wavePower = max(1.0 - (gradiantColor.w * 5.0 - 3.0), noGradient);\n    vec3 color = gradiantColor.rgb + wavePower * caustic * clamp(causticOpacity, 0.0, 1.0);\n\n\tgl_FragColor = vec4(color, gradiantColor.w);\n\t// gl_FragColor = vec4(0.0, wavePower, 0.0, 1.0);\n\t// gl_FragColor = vec4(outgoingLight, 1.0);\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}"
    },
    "4cdd": function(e, t, n) {
        e.exports = n.p + "assets/img/arrow-down-red.89ce0f09.svg"
    },
    "4e64": function(e, t, n) {},
    "50c1": function(e, t, n) {
        "use strict";
        var a = n("6df4")
          , s = n.n(a);
        s.a
    },
    5134: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-color-1x.c062f12e.png"
    },
    5158: function(e, t, n) {
        e.exports = n.p + "assets/img/dirt-diffuse.8a48f686.jpg"
    },
    "52aa": function(e, t, n) {
        e.exports = n.p + "assets/img/waves-noise.bef75930.png"
    },
    "55cb": function(e, t) {
        e.exports = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex \n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n// \n\nvec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{ \n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n    // Permutations\n    i = mod289(i); \n    vec4 p = permute( permute( permute( \n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients: 7x7 points over a square, mapped onto an octahedron.\n    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n    float n_ = 0.142857142857; // 1.0/7.0\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\n#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// Soletanche\nuniform vec3 waterColor;\nuniform float waterHeight;\nuniform float waterY;\nuniform float waterOpacity;\n\nuniform float causticSize;\n\nuniform vec3 cityColor;\nuniform float cityHeight;\nuniform float cityY;\nuniform float cityAlpha;\n\nuniform float time;\n\nvarying vec3 vColorCity;\nvarying vec3 vOriginalPosition;\n\nvoid main()\n{\n    vec3 cityPosition = vec3(modelMatrix * vec4(position, 1.0)).xyz;\n\n    // Water\n    float waterPower = waterY - cityPosition.y * waterHeight;\n    float water = 1.0 - clamp(waterPower, 0.0, waterOpacity);\n\n    // Height depth\n    float height = clamp(cityY - cityPosition.y * cityHeight, 0.0, 1.0);\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n    vOriginalPosition = transformed.xyz;\n    vec3 vModelPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;\n\n    float waveAlpha = snoise(vModelPosition * 50.0 + vec3(time * 0.0987, time * 0.123, -time * 0.759));\n\n\tvColorCity = vec3(1.0, 1.0, 1.0);\n\tvColorCity = mix(vColorCity, cityColor, height * cityAlpha);\n\tvColorCity = mix(waterColor, vColorCity, water);\n}"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"),
        n("551c"),
        n("097d"),
        n("db4d");
        var a = n("2b0e")
          , s = n("8c4f")
          , i = n("a925")
          , r = {
            en: {
                meta: {
                    url: "T219-metro-singapore",
                    title: "Soletanche Bachy - Orchard station and tunnels, Singapore",
                    description: ""
                },
                title: "Orchard Station,<br>Singapore",
                intro: {
                    text: "Located in the heart of Singapore, Orchard station will provide correspondence between the Thomson-East Coast Line and the North-South Line, and will serve one of the main centres for premium shopping, office and housing in the city."
                },
                section1: {
                    t1: "An underground link joins the new station to the existing Orchard Station.",
                    p1: "In Singapore, the consortium made up of Penta Ocean Construction and Bachy Soletanche Singapore (BSS) in association with Soletanche Bachy International and Bessac, has been awarded the Orchard Station & Tunnels works, as part of the construction of the Thomson-East Coast Line (TEL).",
                    p2: "Acting as a general contractor for the Land Transport Authority, this contract was awarded to us on the basis of the quality of our proposal and the innovations proposed, particularly the retractable microtunnelling machine used to form the pipe roofing and walls for the underpass below the busy Orchard Boulevard."
                },
                section2: {
                    p1: "The project is the construction of a new Orchard Station on the site of an School which will be demolished by us, an underground link join the new Station to the existing Orchard Station, below a major highway and then under the iconic Ion Shopping Centre.",
                    p2: "Further underground entrances to the new station were built. Twin Bored Tunnels have been constructed from the new station below a major highway through a high end residential area. Work is taking place on the surface and below ground, in a dense urban space beneath a busy road artery.",
                    t1: "The challenges of design and construction not only involve the nature of soils, but also the project’s environment.",
                    p3: "It also requires a geotechnical expertise, in particular the mastering of the slurry pressure balanced confinement of the TBM in low-cover areas just after the launch shaft, the use of a retractable microtunneling machine for pipe roofing, and some innovative Soil Mixing techniques"
                },
                section3: {
                    p1: "Three access points to the new station and the approach to a future pedestrian crossing under Orchard Boulevard, a connecting platform with the station on the North-South Line, the connection between that platform and the new station.",
                    p2: "The construction of a cut-and-cover link to the station on one side (250m long), bi-tube tunnel to the station on the other side, 840m long with an external diameter of 6.35m."
                },
                section4: {
                    t1: "Foundation works, civil engineering and fitting out the new Orchard Station (210m long), this site involved working on multiple fronts.",
                    p1: "",
                    t2: "A pipe roof using a microtunnel (MTBM): a technical challenge and a world first.",
                    p2: "Bessac’s teams also had to build a connecting corridor between the Thomson-East Coast Line and the North-South Line. The innovative solution developed by BSS, Bessac and Mott MacDonald Singapore consists of a clutched pipe roof, piercing and tubing 18 drives with a diameter of 1,270mm, each 41m long, this was done with the aid of a retractable microtunnel boring machine (MTBM), supplied and operated by Bessac.",
                    t3: "This tunnel is being built at a depth of 27m, under the six-lane Orchard Boulevard, where traffic must continue to flow throughout.",
                    p3: "The MTBM is started from the shaft at the Thomson-East Coast Line end. When the drive is finished, it is retracted down the middle of the microtunnel back to its starting point, before beginning the next drive.",
                    youtube: "hd6T3nIryQM"
                },
                section5: {
                    t1: "Once complete in 2021, Orchard Station will serve as one of the major transport hub in Singapore.",
                    p1: "In 2017, and 2018 the joint-venture won an award for its good performance and commitments in terms of health and safety. The T219 teams received the Safety Excellence Award designated by the client, the Land Transport Authority (LTA), along with the RoSPA Gold Award from the highly-respected Royal Society for the Prevention of Accidents.",
                    link: {
                        label: "Our railways and airports projects",
                        url: "https://soletanche-bachy.com/en/projects/#tunnels"
                    }
                }
            },
            fr: {
                meta: {
                    url: "T219-metro-singapour",
                    title: "Soletanche Bachy - Station Orchard et tunnels, Singapour",
                    description: ""
                },
                title: "Station Orchard,<br>Singapour",
                intro: {
                    text: "Situé au coeur de Singapour, la station Orchard permettra la correspondance entre la Thomson-East Coast Line et la North-South Line et assurera la desserte d’un des principaux centres de commerces, de bureaux et de logements haut de gamme de la ville."
                },
                section1: {
                    t1: "Une connexion souterraine qui relie la nouvelle station à la station Orchard existante.",
                    p1: "À Singapour, le groupement composé de Penta Ocean Construction et de Bachy Soletanche Singapore (BSS) en association avec Soletanche Bachy International et Bessac, s’est vu attribuer la réalisation de la station Orchard et de ses tunnels associés, dans le cadre de la construction de la Thomson-East Coast Line (TEL).",
                    p2: "Conduit en entreprise générale pour le compte du Land Transport Authority, ce projet nous a été attribué pour la qualité de notre offre et les innovations proposées, notamment le microtunnelier rétractable utilisé pour former le toit et les parois du tube pour le passage sous le très fréquenté Orchard Boulevard."
                },
                section2: {
                    p1: "Ce projet comprend la construction de la nouvelle station Orchard, sur le site d’une école que nous avons démolie, une connexion souterraine qui relie la nouvelle station à la station Orchard existante, sous une autoroute et le centre commercial Ion.",
                    p2: "Des accès supplémentaires à la station existante et des tunnels forés bi-tubes sous une route à cinq voies et une zone résidentielle. Les travaux ont eu lieu en surface et en sous-sol, dans un milieu urbain dense et sous un axe routier très fréquenté.",
                    t1: "Les enjeux de conception et d’exécution sont liés à la nature des sols, à l’environnement du projet.",
                    p3: "Aussi, ils nécessitaient une maîtrise des spécialités géotechniques les plus pointues, notamment la mise en œuvre d’un confinement très pointu du tunnelier à pression de boue avec une très faible couverture dès le démarrage du creusement, la mise en œuvre d’un microtunnelier rétractable pour la réalisation de la voûte parapluie, évitant ainsi la réalisation d’un puits de sortie et enfin les techniques innovantes de Soil Mixing."
                },
                section3: {
                    p1: "Trois accès à la nouvelle station et l’amorce d’une future traversée piétonne sous Orchard Boulevard, une plateforme d’échange avec la station sur la North-South Line, et la connexion entre cette plateforme et la nouvelle station.",
                    p2: "La réalisation d’une tranchée couverte vers la station en aval (250m de long), le percement d’un tunnel bi-tube vers la station en amont, de 840m de longueur et 6,35m de diamètre extérieur."
                },
                section4: {
                    t1: "Travaux de fondations, de génie civil ou finitions de la nouvelle station Orchard proprement dite (210m de long), le chantier a multiplié les fronts.",
                    p1: "",
                    t2: "Une voûte parapluie au microtunnelier, réussite technique et première mondiale.",
                    p2: "Les équipes de Bessac réalisent un couloir de connexion entre la Thomson-East Coast Line et la North-South Line. La solution innovante consiste à mettre en œuvre une voûte parapluie en perçant et tubant 18 tirs de 1 270mm de diamètre et de 41m de long, chacun à l’aide d’un microtunnelier rétractable, fourni et opéré par Bessac.",
                    t3: "Cette galerie est construite à 27m de profondeur, sous les six voies d’Orchard Boulevard dont le trafic ne peut être ni perturbé, ni interrompu, ni dévié.",
                    p3: "Le principe : le microtunnelier est démarré depuis le puits de départ, lorsque le tir est terminé, il est rétracté jusqu’au puits de départ afin de réaliser les tirs suivants.",
                    youtube: "hd6T3nIryQM"
                },
                section5: {
                    t1: "Une fois réalisée en 2021, la station Orchard sera un hub de transport majeur de Singapour.",
                    p1: "En 2017, et 2018 la joint-venture a été primée pour ses bons résultats et ses engagements en matière de santé et de sécurité. Les équipes du T219 ont ainsi reçu le Safety Excellence Award, ou ASAC (Annual Safety Award Convention) décerné par leur client, le Land Transport Authority (LTA), ainsi que le RoSPA Gold Award de la part de la réputée Royal Society for the Prevention of Accidents.",
                    link: {
                        label: "Nos projets de rails et aéroports",
                        url: "https://soletanche-bachy.com/fr/realisations/#tunnels"
                    }
                }
            },
            es: {
                meta: {
                    url: "T219-metro-singapur",
                    title: "Soletanche Bachy - Estación Orchard y túneles, Singapur",
                    description: ""
                },
                title: "Estación Orchard,<br>Singapur",
                intro: {
                    text: "Situado en el centro de Singapur, la estación Orchard permitirá la conexión entre la Thomson-East Coast Line y la North-South Line y garantizará el servicio de uno de los principales centros de comercios, de oficinas y de viviendas de alta gama de la ciudad."
                },
                section1: {
                    t1: "Un enlace subterráneo que conecta la nueva estación con la estación Orchard existente.",
                    p1: "En Singapur, el consorcio compuesto por Penta Ocean Construction y Bachy Soletanche Singapore (BSS) en asociación con Soletanche Bachy International y Bessac, ha ganado el contrato de construcción de la estación Orchard y de los túneles asociados, en el marco de la construcción de la Thomson-East Coast Line (TEL).",
                    p2: "Como contratista general para Land Transport Authority, hemos ganado este contrato gracias a la calidad de nuestra oferta y a las innovaciones propuestas, principalmente la microtuneladora retractable utilizada para formar el techo y las paredes del tubo para el cruce por debajo del muy transitado bulevar Orchard."
                },
                section2: {
                    p1: "Este proyecto incluye la construcción de la nueva estación Orchard en lugar de una escuela que hemos demolido, un enlace subterráneo que conecta la nueva estación con la estación Orchard existente por debajo de una autopista y debajo del centro comercial Ion.",
                    p2: "Accesos adicionales a la estación existente, túneles excavados de dos tubos por debajo de una autopista de cinco carriles y una zona residencial. Los trabajos tuvieron lugar en la superficie y en el subsuelo, en un medio urbano denso y bajo una carretera muy frecuentada.",
                    t1: "Los retos de diseño y de ejecución están relacionados con la naturaleza de los suelos, con el entorno del proyecto.",
                    p3: "También, necesitaban un dominio de las especialidades geotécnicas muy exigentes, principalmente la ejecución de un confinamiento muy avanzado de la tuneladora a presión de lodo con una cobertura muy baja desde el arranque hasta la perforación, la puesta en marcha de una microtuneladora retractable para la realización de una bóveda paraguas, evitando de esta manera la realización de un pozo de salida y finalmente las técnicas innovadoras de Soil Mixing."
                },
                section3: {
                    p1: "Tres accesos a la nueva estación y los trabajos preliminares de una futura travesía peatonal bajo Orchard Boulevard, la plataforma de intercambio con la estación sobre la North-South Line, y la conexión entre esta plataforma y la nueva estación.",
                    p2: "La realización de un túnel de trinchera cubierta hacia la estación descendiente (250m de largo), la construcción de dos túneles paralelos, de 840m de longitud cada uno y 6,35m de diámetro exterior, hacia la estación siguiente."
                },
                section4: {
                    t1: "Trabajos de cimentaciones, de ingeniería civil y de acabados de la nueva estación Orchard propiamente dicha (210m de largo), esta obra multiplicó los frentes.",
                    p1: "",
                    t2: "Una bóveda de paraguas en microtúneles: Éxito y primicia mundial.",
                    p2: "Los equipos de Bessac realizan un corredor de conexión entre la Thomson-East Coast Line y la North-South Line. La solución innovadora consiste en poner en marcha una bóveda paraguas perforando y entubando 18 tiros de 1 270mm de diámetro y de 41m de largo, cada uno con la ayuda de una microtuneladora retractable suministrada y operada por Bessac.",
                    t3: "Esta galería es construida a 27m de profundidad, bajo las seis vías de Orchard Boulevard donde el tráfico no puede estar perturbado, ni interrumpido, ni desviado.",
                    p3: "El principio: la microtuneladora arranca desde el pozo de lanzamiento, cuando el tramo está terminado, se retracta la microtuneladora desde el pozo de lanzamiento con el fin de realizar los siguientes tramos.",
                    youtube: "hd6T3nIryQM"
                },
                section5: {
                    t1: "Una vez se haya realizado en el 2021, la estación Orchard será un centro de transporte muy importante en Singapur.",
                    p1: "En 2017, y 2018 el Consorcio fue premiado por sus buenos resultados y sus compromisos en salud y seguridad. Los equipos del T219 también recibieron el Safety Excellence Award for otorgado por su cliente, el Land Transport Authority (LTA), y también el RoSPA Gold Award por parte de la reputada Royal Society for the Prevention of Accidents.",
                    link: {
                        label: "Nuestras estructuras ferroviarias y aeroportuarias",
                        url: "https://soletanche-bachy.com/es/proyectos/#tuneles"
                    }
                }
            }
        }
          , o = {
            en: {
                meta: {
                    url: "aguadulce-port-colombia",
                    title: "Soletanche Bachy - Aguadulce port, Colombia",
                    description: ""
                },
                title: "Aguadulce Port,<br>Colombia",
                intro: {
                    text: "The 600m long, 14m deep PANAMAX terminal located on the Aguadulce Peninsula in Buenaventura."
                },
                section1: {
                    p1: "Most of the Andean country’s exports and imports pass through the port, which was recently upgraded in a project that sets a benchmark for the entire region.",
                    t1: "Buenaventura is a strategic city and home to Aguadulce, Colombia’s main port on the Pacific coast."
                },
                section2: {
                    p1: "Soletanche Bachy helped achieve this modernisation by working within the SBCC joint venture (Soletanche Bachy Cimas, Soletanche Bachy International y ConConcreto) and designed and built, all for the client SPIA (Sociedad Puerto Industrial Aguadulce).",
                    p2: "600-metre-long, 45.6-meter-wide container terminal, plus a 165-meter-long wide access way with a width of 14 meter-wide and a 30-meter-wide platform for unloading containers, all for the client SPIA (Sociedad Puerto Industrial Aguadulce).",
                    t1: "Design and build of the quay and its access gateway.",
                    p3: "Works include the installation of vibro-driven piles for the foundations, the civil engineering works with many prefabricated elements (pile heads, beams, preslabs), pouring a compression slab, and the installation of port fittings (protection, bollards, etc.)."
                },
                section3: {
                    p: "In terms of the value engineering, there were several goals. The project had to be easy to execute for rapid completion, and the structure had to be light for better resistance to earthquakes, which meant using a maximum number of prefabricated elements to reduce the quantities of concrete and steel. In addition, since the elements could not be built on site, they had to be transported there by sea."
                },
                section4: {
                    t1: "The finished project had to be capable of receiving two Panamax vessels, each 300m long, and includes several gantries with a height of 85m to unload the 25-tonne containers.",
                    p1: "This involved the installation of metallic tubular piles: 546 units, to a depth of up to 50m, vertical drains: 17,707 linear meters, rigid inclusions: 19,286 linear meters, concrete: 25,000m<sup>3</sup> (civil engineering).",
                    t2: "The project had to overcome many challenges, both in terms of engineering and social and environmental issues.",
                    p2: "Concerning the social aspect and locals communities, 100% of unskilled workers and 50% of skilled workers had to come from the six local Afro-Colombian communities, which meant some 750 people working on site at the height of its activity.",
                    p3: "Special attention had to be paid to minimise the project’s impact on the surrounding fauna and flora.",
                    youtube: "xizJKk9OWwQ"
                },
                section5: {
                    t1: "In Buenaventura, several innovations were introduced to boost the efficiency and quality of the onshore and offshore works, optimise costs, and accelerate the construction process.",
                    p1: "The project was successfully delivered almost six months ahead of schedule and won a second Colombian National Engineering Award in 2017. This was followed by the construction of terminal for loose merchandise (cereals and coal) with a length of 250m and an access way 200m long, under a contract from the Colombian company BOSCOAL granted to the Aguadulce joint venture (SBCC). This element was delivered five months ahead of the contractual date and won the first Colombian National Engineering Award in 2018.",
                    link: {
                        label: "Our port infrastructure projects",
                        url: "https://soletanche-bachy.com/en/projects/#markets=port-infrastructure"
                    }
                }
            },
            fr: {
                meta: {
                    url: "port-aguadulce-colombie",
                    title: "Soletanche Bachy - Port d'Aguadulce, Colombie",
                    description: ""
                },
                title: "Port d'Aguadulce,<br>Colombie",
                intro: {
                    text: "Le terminal PANAMAX long de 600m et d'une profondeur de 14m, situé dans la Péninsule d'Agualduce à Buenaventura."
                },
                section1: {
                    p1: "La majeure partie des exportations et des importations du pays andin passe par ce port dont la modernisation fait figure de référence pour l’ensemble de la région.",
                    t1: "Accueillant le principal port de Colombie sur la côte Pacifique, Buenaventura est une ville stratégique."
                },
                section2: {
                    p1: "Soletanche Bachy a répondu à cette ambition de modernité en concevant et construisant, au sein du groupement SBCC (Soletanche Bachy Cimas, Soletanche Bachy International et ConConcreto) un quai à conteneurs pour le compte de SPIA (Sociedad Puerto Industrial del Aguadulce).",
                    p2: "600m de long, 45,6m de large, une passerelle d'accès de 165m de long et 14m de large, une plateforme de 30m de large pour le déchargement des conteneurs.",
                    t1: "Conception - construction du quai et de sa passerelle d'accès.",
                    p3: "Les travaux comprennent la réalisation des pieux vibrés battus pour les fondations, le génie civil avec de nombreux éléments préfabriqués (têtes de pieux, poutres, prédalles), le coulage en place d'une dalle de compression et l'installation des différents apparaux (défenses, bollards…)."
                },
                section3: {
                    p: "Concernant la value engineering, plusieurs objectifs : rendre plus simple et plus rapide la réalisation du chantier, alléger la structure pour une meilleure résistance au séisme, mettre en place un maximum d’éléments préfabriqués, réduire les quantités de béton et d'acier. Enfin, les éléments ne pouvant être construits sur place devait être transportés par la mer."
                },
                section4: {
                    t1: "L’objectif du projet, recevoir deux Panamax de 300m de long, plusieurs portiques de 85m de haut pouvant décharger des conteneurs de 25 tonnes.",
                    p1: "En quelques chiffres il s’agit de la mise en place de: 546 pieux vibrés métalliques pouvant aller jusqu’à 50m de profondeur, 17 707m de drains verticaux, 19 286m d’inclusions rigides, 25 000m<sup>3</sup> de bétons (génie civil)",
                    t2: "Le chantier a dû faire face à de nombreux défis que ce soit du domaine de l’ingénierie, social ou environnemental.",
                    p2: "Pour ce qui est du volet social et des communautés locales, 100% des manœuvres non qualifiés et 50% des manœuvres qualifiés étaient issus des six communautés afrocolombiennes locales, soit 750 personnes mobilisées au plus fort de l’activité du chantier.",
                    p3: "Une attention particulière a été portée sur le projet en vue de minimiser les impacts sur la faune et la flore environnantes.",
                    youtube: "xizJKk9OWwQ"
                },
                section5: {
                    t1: "Plusieurs innovations ont permis d’améliorer l’efficacité et la qualité des travaux on-shore et off-shore, d’optimiser les coûts et d’accélérer le processus de construction.",
                    p1: "Le projet a été livré avec succès avec quasiment 6 mois d’avance et a reçu le deuxième prix National d’Ingénierie de Colombie en 2017. S’en est suivie la construction d’un terminal à pondéreux (grains et charbon) de 250m de long et d’une passerelle de 200m de long, projet également confié par la société colombienne BOSCOAL au Consorcio Aguadulce (SBCC). Cet ouvrage aura également été livré 5 mois avant la date contractuelle et a reçu le premier prix National d’Ingénierie de Colombie en 2018.",
                    link: {
                        label: "Nos projets d’ouvrages maritimes",
                        url: "https://soletanche-bachy.com/fr/realisations/#marches=ouvrages-maritimes"
                    }
                }
            },
            es: {
                meta: {
                    url: "puerto-aguadulce-colombia",
                    title: "Soletanche Bachy - Puerto de Aguadulce, Colombia",
                    description: ""
                },
                title: "Puerto de Aguadulce,<br>Colombia",
                intro: {
                    text: "La terminal PANAMAX de 600m de largo y 14m de profundidad, ubicada en la península de Agualduce en Buenaventura."
                },
                section1: {
                    p1: "La mayor parte de las exportaciones y de las importaciones del país andino pasan por el puerto de Aguadulce cuya modernización es una referencia para toda la región.",
                    t1: "Buenaventura es una ciudad estratégica que acoge el principal puerto de Colombia en la costa Pacífica."
                },
                section2: {
                    p1: "Soletanche Bachy respondió a esta ambición de modernidad diseñando y construyendo, en el seno del consorcio SBCC (Soletanche Bachy Cimas, Soletanche Bachy International y ConConcreto), un muelle de contenedores por cuenta de SPIA (Sociedad Puerto Industrial Aguadulce).",
                    p2: "600m de longitud y 45,6m de ancho, una pasarela de acceso de 165m de largo y de 14m de ancho, una plataforma de 30m de ancho para la descarga de los contenedores.",
                    t1: "Diseño y construcción del muelle y de su pasarela de acceso.",
                    p3: "Las obras incluyen la realización de los pilotes vibrados hincados para las cimentaciones, la ingeniería civil con numerosos elementos prefabricados (cabezales de pilotes, vigas, prelosas), la colocación de una losa de compresión, así como la instalación de aparejos (protecciones, bolardos...)."
                },
                section3: {
                    p: "En cuanto a la ingeniería de valor, se establecieron varios objetivos: hacer que la realización de la obra fuera más simple y más rápida, aligerar la estructura para una mayor resistencia a los seísmos, instalar un máximo número de elementos prefabricados, reducir las cantidades de hormigón y de acero. Finalmente, los elementos que no pudieron construirse en el sitio tuvieron que ser transportados por mar."
                },
                section4: {
                    t1: "El objetivo del proyecto es recibir dos Panamax de 300m de largo, varios pórticos de 85m de altura que pueden descargar contenedores de 25 toneladas.",
                    p1: "En algunas cifras, se trata de la instalación de: 546 pilotes tubulares metálicos que pueden ir hasta los 50m de profundidad, 17.707m de drenes verticales, 19.286m de inclusiones rígidas, 25.000m<sup>3</sup> de concreto (Ingeniería civil).",
                    t2: "La obra tuvo que hacer frente a numerosos desafíos en el sector de la ingeniería, social y medioambiental.",
                    p2: "En cuanto a los asuntos sociales y las comunidades locales, el 100% de los obreros no cualificados y el 50% de los obreros cualificados debían proceder de las seis comunidades afrocolombianas locales, es decir, 750 personas movilizadas en el apogeo de la actividad de la obra.",
                    p3: "Se prestó una atención particular al proyecto para minimizar los impactos sobre la fauna y la flora locales.",
                    youtube: "xizJKk9OWwQ"
                },
                section5: {
                    t1: "Varias innovaciones permitieron mejorar la eficacia y la calidad de las obras on-shore y off-shore, además de optimizar los costes y acelerar el proceso de construcción.",
                    p1: "El proyecto se entregó con éxito y casi con 6 meses de anterioridad y recibió el premio Nacional de Ingeniería de Colombia en 2017. Esto fue seguido por la construcción de una terminal de mercancías pesadas (grano y carbón) de 250m de largo y una pasarela de 200m de largo, un proyecto también confiado por la compañía colombiana BOSCOAL al Consorcio Aguadulce (SBCC). Esta obra también se entregó 5 meses antes de la fecha contractual y recibió el primer premio Nacional de Ingeniería de Colombia en 2018.",
                    link: {
                        label: "Nuestras obras marítimas",
                        url: "https://soletanche-bachy.com/es/proyectos/#mercados=obras-maritimas"
                    }
                }
            }
        }
          , l = {
            en: {
                meta: {
                    url: "wanapum-dam-usa",
                    title: "Soletanche Bachy - Wanapum Dam, United States",
                    description: ""
                },
                title: "Wanapum Dam,<br>United States",
                intro: {
                    text: "10 kilometres downstream of the tiny town of Vantage, Washington, the Wanapum dam has harnessed the waters of the mighty Columbia River."
                },
                section1: {
                    t1: "More than 2,500m from bank to bank.",
                    p1: "The dam, which was constructed in the early 1960s, extends more than 2,500m from bank to bank, includes left and right earth embankments and a 10-unit powerhouse. ",
                    p2: "It also includes a concrete spillway featuring radial gates that measure 15m wide and more than 20m high."
                },
                section2: {
                    p1: "In February of 2014, workers noticed a slight misalignment in the roadway deck curbs and handrails located at the top of the spillway during a routine maintenance inspection. Further investigation showed that the top of Pier 4 had moved more than 5cm downstream. A follow-up dive inspection revealed a 20m long by 5cm wide crack that spanned the full length of Monolith 4.",
                    p2: "The owner of the dam, Grant County Public Utility District, immediately mandated a drawdown of the dam’s reservoir to relieve pressure on the spillway monoliths.",
                    t1: "A 20m long by 5cm wide crack that spanned the full length of Monolith 4.",
                    p3: "After extensive investigation, it was determined that the crack was caused by mathematical errors in the initial design calculations and late changes to the final spillway design. It is also suspected that there may have been problems curing the concrete the weekend it was poured due to unusually hot temperatures."
                },
                section3: {
                    p: "Post-tension anchors were selected as the repair solution for Monolith 4, along with drilling lift joint drains above the gallery to reduce uplift pressure resulting from cracking within the body of the dam."
                },
                section4: {
                    p1: "The restraining force necessary to stabilize the dam required thirty-five 61-strand tendon anchors with lengths up to 79m installed through the dam structure.",
                    t1: "61-strand tendon anchors with lengths up to 79m",
                    p2: "The most grueling challenge on the project was the drilling to advance 40cm boreholes necessary to install the 61-strand tendons, which required careful planning and precision through highly variable and highly fractured basalt rock. In this case, the fractured basalt rock could take more than a half dozen attempts of grouting and re-drilling to achieve water tightness.",
                    t2: "An additional 69 solid bar anchors, a majority of which were 7.6cm diameter, were installed under water through the ogee spillway.",
                    p3: "The cracks in Monoliths 2 and 4 were repaired to reduce seepage, decrease water pressure and improve stability. The grouting program included patching and sealing followed by an intricate sequence of cement grout injections. The entire drilling, grouting and anchor tensioning processes were performed with the assistance of divers and using remote cameras to allow engineers at the surface to witness the underwater operations.",
                    youtube: "Li8ojCJY1OM",
                    p4: "The District developed a two-part strategy to restore the reservoir elevation as soon as possible. An intermediate pool raise was proposed after repair of the cracked monolith and some preventative measures were installed. The reservoir would be restored to the maximum pool level after completion of all remedial measures."
                },
                section5: {
                    t1: "The collaborative working relationship between the District, MWH, Nicholson and Kuney Goebel JV resulted in a very successful project at Wanapum dam.",
                    p1: "The consistent team approach harbored creative solutions to overcome unique challenges in design, planning and construction phases of the project. It is also with this collaboration that the team was able to meet the schedule-demanding milestones to successfully rehabilitate Wanapum dam with quality and safety at the forefront.",
                    link: {
                        label: "Our dams projects",
                        url: "https://soletanche-bachy.com/en/projects/#markets=dams"
                    }
                }
            },
            fr: {
                meta: {
                    url: "barrage-wanapum-usa",
                    title: "Soletanche Bachy - Barrage Wanapum, Etats Unis",
                    description: ""
                },
                title: "Barrage de Wanapum,<br>Etats Unis",
                intro: {
                    text: "À une dizaine de kilomètres de la petite ville de Vantage, dans l'État de Washington, le barrage de Wanapum a maîtrisé les eaux du puissant fleuve Columbia."
                },
                section1: {
                    t1: "Le barrage s'étend sur plus de 2 500m d'une rive à l'autre",
                    p1: "Ce barrage construit au début des années 1960 s'étend sur plus de 2 500m d'une rive à l'autre et comprend des remblayages de terre ainsi qu'une centrale électrique de 10 unités.",
                    p2: "Il comprend également un déversoir en béton doté de portes radiales qui mesurent 15m de large et plus de 20m de haut."
                },
                section2: {
                    p1: "En février 2014, des ouvriers remarquèrent lors d'une inspection de routine un léger défaut d'alignement dans les trottoirs de la dalle de chaussée et les rampes situées au sommet du déversoir. Une enquête plus poussée montra que la partie supérieure de la Pile 4 s'était déplacée de plus de 5cm en aval. Une inspection de contrôle réalisée par une équipe de plongée mit en évidence une fissure de 20m de long et 5cm de large courant sur toute la longueur du Monolithe 4.",
                    p2: "Le propriétaire du barrage, le district des Services publics du comté de Grant, demanda immédiatement un rabattement de nappe du réservoir du barrage afin de soulager la pression exercée sur les monolithes du déversoir.",
                    t1: "Une fissure de 20m de long et 5cm de large courant sur toute la longueur du Monolithe 4.",
                    p3: "Une enquête approfondie détermina que la fissure avait été causée par des erreurs mathématiques dans les calculs de conception initiaux et dans des modifications ultérieures apportées à la conception finale du déversoir. On suppose également que la cure du béton a pu être affectée par les températures exceptionnellement chaudes du week-end où il a été coulé."
                },
                section3: {
                    p: "La solution choisie pour la réparation du Monolithe 4 comprend des ancrages de postcontrainte ainsi que l’installation de drains au-dessus de la galerie pour réduire la sous-pression causée par la fissuration dans le corps du barrage."
                },
                section4: {
                    p1: "La force requise pour stabiliser le barrage nécessitait 35 ancrages à torons de 61 brins d'une longueur pouvant atteindre 79m, installés dans la structure du barrage.",
                    t1: "61 brins d'une longueur pouvant atteindre 79m",
                    p2: "Le défi le plus éprouvant du projet a été le forage des trous de 40cm nécessaires à l’installation des torons de 61 brins, qui a nécessité une planification minutieuse et une grande précision afin d'éviter d'endommager la roche de basalte très variable et fracturée. Ceci a permis que la roche de basalte fracturée puisse supporter plus d'une demi-douzaine de tentatives d'injection de coulis et un nouveau forage pour en assurer l'étanchéité.",
                    t2: "69 ancrages supplémentaires à barre pleine, dont la plupart faisaient 7,6cm de diamètre, ont été installés sous l'eau dans le déversoir en doucine.",
                    p3: "Les fissures des Monolithes 2 et 4 ont été réparées pour réduire le suintement et la pression de l'eau, et améliorer la stabilité. Le programme d’injection comprenait la réparation et de l'étanchement des fissures, s’en est suivis une séquence complexe d'injections de coulis de ciment. Les processus de forage, d'injection de coulis et de tension des ancrages ont entièrement été réalisés avec l'aide de plongeurs et de caméras télécommandées afin que les ingénieurs puissent observer depuis la surface les opérations qui se déroulaient sous l'eau.",
                    youtube: "Li8ojCJY1OM",
                    p4: "Le district a mis en place une stratégie en deux parties en vue de restaurer le niveau du réservoir le plus tôt possible. Une élévation intermédiaire du bassin a été proposée après la réparation du monolithe fissuré, et des mesures de prévention ont été mises en place. Le réservoir retrouverait son niveau maximal une fois toutes les mesures correctives achevées."
                },
                section5: {
                    t1: "Le succès du projet du barrage de Wanapum est le résultat de la collaboration efficace entre le district, MWH, Nicholson et Kuney Goebel JV.",
                    p1: "L’approche de cette équipe soudée a offert un terreau propice aux solutions créatives pour surmonter les défis uniques qu'ont posés les phases de conception, de planification et de construction du projet. C'est également grâce à cette collaboration que l'équipe a pu respecter les échéances contraignantes pour réhabiliter le barrage de Wanapum en privilégiant la qualité et la sécurité.",
                    link: {
                        label: "Nos projets barrages",
                        url: "https://soletanche-bachy.com/fr/realisations/#marches=barrages"
                    }
                }
            },
            es: {
                meta: {
                    url: "presa-wanapum-usa",
                    title: "Soletanche Bachy - Presa de Wanapum, USA",
                    description: ""
                },
                title: "Presa de Wanapum,<br>Estados Unidos",
                intro: {
                    text: "10 kilómetros aguas abajo de la pequeña ciudad de Vantage, en el estado de Washington, la presa Wanapum retiene las aguas del poderoso río Columbia."
                },
                section1: {
                    t1: "Se extiende a más de 2500m de banco a banco.",
                    p1: "La presa, que se construyó a principios de la década de 1960, se extiende a más de 2500m de banco a banco, incluye terraplenes de tierra a la izquierda y a la derecha y una central eléctrica de 10 unidades.",
                    p2: "También incluye un vertedero de concreto con puertas radiales que miden 15m de ancho y un poco más de 20m de alto."
                },
                section2: {
                    p1: "En febrero de 2014, durante una inspección de mantenimiento de rutina, los trabajadores notaron una ligera desalineación en los bordillos de la cubierta de la calzada y en los pasamanos ubicados en la parte superior del vertedero. Una investigación posterior mostró que la parte superior del Muelle 4 se había movido más de 5cm río abajo. Una inspección de seguimiento bajo el agua reveló una grieta de 20m de largo por 5cm de ancho que se extendió por todo el monolito 4.",
                    p2: "El propietario de la represa, el Distrito de Servicios Públicos del Condado de Grant, ordenó, entonces, de inmediato que se bajara el nivel del embalse de la presa para aliviar la presión sobre los monolitos del vertedero.",
                    t1: "Una grieta de 20m de largo por 5cm de ancho que se extendió por todo el monolito 4.",
                    p3: "Después de una extensa investigación, se determinó que la grieta fue causada por errores matemáticos en los cálculos del diseño inicial y por cambios tardíos en el diseño del vertedero final. También se sospecha que pudo haber problemas para curar el concreto el fin de semana en que se vertió debido a temperaturas inusualmente altas."
                },
                section3: {
                    p: "Como solución de reparación para el monolito 4, se seleccionaron anclajes de postensación, así como la instalación de drenes por encima de la galería, para reducir la presión de levantamiento resultante de la fisura dentro del cuerpo de la presa."
                },
                section4: {
                    p1: "La fuerza de sujeción necesaria para estabilizar la presa requirió 35 anclajes de tendón de 61 hilos con longitudes de hasta 79m instalados a través de la estructura de la presa.",
                    t1: "61 hilos con longitudes de hasta 79m",
                    p2: "El mayor desafío del proyecto fue la perforación para avanzar pozos de 40cm necesarios para instalar los anclajes de 61 hilos, que requerían una planificación cuidadosa y precisión a través de roca de basalto altamente variable y muy fracturada. Para lograr la estanqueidad, la roca de basalto fracturada podía requerir más de media docena de intentos de lechada y taladrado.",
                    t2: "Unos 69 anclajes de barra sólida adicionales, la mayoría de los cuales tenían un diámetro de 7,6cm, se instalaron bajo el agua a través del aliviadero conopial.",
                    p3: "Las grietas en los monolitos 2 y 4 fueron reparadas para reducir la filtración, disminuir la presión del agua y mejorar la estabilidad. El programa de lechada incluyó parches y sellado seguidos de una intrincada secuencia de inyecciones de lechada de cemento. La totalidad de los procesos de perforación, lechada y tensión de anclaje se realizaron con la asistencia de buzos y con cámaras remotas para permitir que los ingenieros en la superficie fueran testigos de las operaciones llevadas a cabo bajo el agua.",
                    youtube: "Li8ojCJY1OM",
                    p4: "El Distrito desarrolló una estrategia de dos partes para restaurar la elevación del embalse lo antes posible.  Se propuso un aumento de la cuenca intermedia después de la reparación del monolito agrietado y se implementaron algunas medidas preventivas. El embalse se restaurará al nivel máximo de la cuenca después de completar todas las medidas correctivas."
                },
                section5: {
                    t1: "La relación de trabajo colaborativo entre el Distrito, MWH, Nicholson y Kuney Goebel JV resultó en un proyecto muy exitoso para la presa de Wanapum.",
                    p1: "El consistente enfoque de equipo aportó soluciones creativas para superar desafíos únicos en las fases de diseño, planificación y construcción del proyecto. Además, con esta colaboración, el equipo pudo cumplir con las metas que requería el calendario y, así, rehabilitar con éxito la presa de Wanapum, con calidad y seguridad ante todo.",
                    link: {
                        label: "Nuestros proyectos de presas",
                        url: "https://soletanche-bachy.com/es/proyectos/#mercados=presas"
                    }
                }
            }
        }
          , c = {
            en: {
                meta: {
                    url: "second-world-war-museum-poland",
                    title: "Soletanche Bachy - Second World War Museum, Poland",
                    description: ""
                },
                title: "Second World War<br>Museum, Poland",
                intro: {
                    text: "A Second World War memorial museum is being built in Gdańsk, Poland, where the war began. The ambitious government-funded project provides for a structure that will be almost completely underground."
                },
                section1: {
                    t1: "A 14,600m<sup>2</sup> “box” descending to a depth of 22m.",
                    p1: "Located in a region with soft soils (organic material and sand) and alongside a canal, the 14,600m<sup>2</sup> “box” descending to a depth of 22m had to be watertight with a flow of less than 20m<sup>3</sup>/h.",
                    p2: "The challenge was met by Soletanche Polska, which proposed a turnkey excavation solution that responded to the client’s needs, doing away with the constraint of 18m of ground water lowering. This solution required less concrete and other resources, reducing the nuisance to locals and the environmental impact.<br><br>The teams built a 509m perimeter of diaphragm wall with a thickness of one meter to a depth of 28m. This wall was fitted with Waterstop joints using CWS® to improve its waterproofing. It was then anchored at the top by 914 ground anchors with a 100to capacity.",
                    p3: "The excavation, including 195,000m<sup>3</sup> by dredging, allowed us to attain the final excavation level. Micropiles were installed to anchor the future raft. The 25,000m<sup>3</sup> of concrete in the temporary raft was carried out without interruption."
                },
                section2: {
                    p1: "<strong>Quality concrete</strong>: In such a concreting “shot”, choosing a reliable supplier of quality concrete is one of the priorities. Several concrete plants, plus back-up plants, additional trucks, extra equipment on stand-by, extra manpower, and the whole supply chain of raw materials must be prepared and ready to work round-the-clock for 7-10 days.",
                    t1: "Numerous challenges were met as part of this exceptional project:",
                    p2: "<strong>Installation of micropiles to the nearest millimeter</strong>: the creation of diaphragm walls with CWS<sup>®</sup> anchored in poor soil was a remarkable feat, and the installation of 914 micropiles and the raft were a genuine challenge. <br><br>Installing low cut-off micropiles from a barge requires faultless procedures and execution, with no margin for error, requires faultless procedures and execution. Trials were carried out in advance outside the excavation, with tests carried out underwater. To achieve this successfully required the help of divers.",
                    p3: "<strong>Permanent surveillance</strong>: one of the other most important issues was monitoring of the plug during dewatering of the pit, which allowed us to check movements of the plug in real time (with Cyclops and manual surveying), and also to control the water table outside and inside the pit.",
                    p4: "<strong>Impeccable site organisation and safety</strong>: with multiple activities on site and a complex environment (nearby building projects for new road and sewage treatment plant), plus a lot of subcontractors and 70% of the project done from barges with the aid of divers, Soletanche Polska completed the work on a tough schedule and in total safety, with not even a single accident."
                },
                section3: {
                    t1: "A concrete plug",
                    p: "Concreting of the plug was done using the subcontractor’s patented “dobber” system. A heavy disc weighing around 1,200kg is connected to the tremie pipe and a floater. It is placed in the bottom of the excavation and then raised a bit, then the concrete is poured.",
                    t2: "It was poured in seven days without interruption at an average rate of 150cu. metres per hour."
                },
                section4: {
                    p1: "For this project, Soletanche Polska has also done :",
                    p2: "<ul><li>• Micropiles testing with visibility of tens of centimetres</li><li>• Installing coffering for the elevator shafts</li><li>• Monitoring movements of the raft</li></li>• Decompression pumping (limited) until the definitive had been installed and installation of shafts.</li></ul>",
                    t1: "The most ambitious project Soletanche Polska has designed and executed.",
                    t2: "Underwater concreting record",
                    p3: "The turnkey excavation for the construction of the Museum of the Second World War was the most difficult project Soletanche Polska has designed and executed.",
                    p4: "We finished by setting a new record for underwater concreting, with 25,000m<sup>3</sup> of concrete in one “shot”, poured over seven days and nights.",
                    youtube: "_8S558IniJM"
                },
                section5: {
                    t1: "In seven months, respectful of the environment and completed with zero accidents, this project illustrates the expertise of the Soletanche Bachy group.",
                    p1: "We are proud to say that Soletanche Polska provided its own variant, involving the world’s biggest ever underwater concreting.",
                    link: {
                        label: "Our building and housing projects",
                        url: "https://soletanche-bachy.com/en/projects/#markets=deep-foundations"
                    }
                }
            },
            fr: {
                meta: {
                    url: "musee-seconde-guerre-mondiale-pologne",
                    title: "Soletanche Bachy - Musée de la Seconde Guerre Mondiale, Pologne",
                    description: ""
                },
                title: "Second World War<br>Museum, Pologne",
                intro: {
                    text: "A Gdańsk, dans la ville où débuta la Seconde Guerre mondiale en Pologne, un musée mémorial est édifié. Porté par le gouvernement, ce projet ambitieux prévoit un ouvrage presque totalement enterré."
                },
                section1: {
                    t1: "Une « boîte » de 14 600m<sup>2</sup>, et de 22m de profondeur",
                    p1: "Situé dans une zone de sols meubles (organique et sableux), et longé par un canal, la « boîte » de 14 600m<sup>2</sup>, et de 22m de profondeur devait être très étanche car le débit devait être inférieur à -20m<sup>3</sup>/h. ",
                    p2: "Le défi a été relevé par Soletanche Polska en proposant une alternative de fouille clé en main, répondant aux besoins du client, en s’affranchissant de la contrainte de 18m de rabattement. Cette solution a nécessité moins de béton et autres ressources réduisant la gêne aux mitoyens et l’impact environnemental.<br><br>Les équipes ont réalisé une enceinte périmétrale de 509m en paroi moulée d’un mètre d’épaisseur et de 28m de profondeur. Cette paroi a été équipée de joints Waterstop grâce au CWS<sup>®</sup> afin d’améliorer son étanchéité. Elle a ensuite été ancrée en tête par 914 tirants de 100to de capacité.",
                    p3: "L’excavation de la fouille, dont 195 000m<sup>3</sup> par dragage a permis d’atteindre le niveau d’excavation final. Des micropieux servant d’ancrage définitif au futur radier ont été réalisés. Le coulage des 25 000m<sup>3</sup> de béton du radier temporaire a été réalisé sans interruption."
                },
                section2: {
                    p1: "<strong>Un béton de qualité</strong> : Avec ce type de bétonnage coulé sous l’eau le choix d'un fournisseur de béton fiable et de qualité est l'une des priorités. Plusieurs centrales à béton, centrales auxiliaires, camions supplémentaires, de l'équipement supplémentaire de réserve, du personnel supplémentaire et toute la chaîne d'approvisionnement en matières premières devaient être préparés et prêts à intervenir 24 heures sur 24 pendant 7 à 10 jours.",
                    t1: "De nombreux défis ont été relevés dans le cadre de ce projet hors normes",
                    p2: "<strong>Une réalisation de micropieux au millimètre</strong> : si la réalisation des parois avec CWS<sup>®</sup> ancrées dans des terrains médiocres est remarquable, la réalisation des 914 micropieux et du radier ont été de vrais défis. Réaliser des micropieux depuis une barge, en arrase basse avec comme obligation le zéro défaut, nécessite des procédures et réalisations sans faille. Si des essais tests préalables ont été fait à l’extérieur de la fouille, les tests de contrôle devaient être menés sous l’eau. C’est donc assisté de plongeurs que les tests ont été menés avec succès.",
                    p3: "<strong>Une organisation et une sécurité sur chantier irréprochable</strong> : malgré une forte coactivité sur le chantier, un environnement complexe (proximité de chantiers de construction de route et de système de traitement des eaux usées), la présence de nombreux sous-traitants et la réalisation de 70 % du projet depuis des barges et à l’aide de plongeurs, Soletanche Polska a exécuté les travaux en respectant des échéances exigeantes en toute sécurité.",
                    p4: "<strong>Une surveillance permanente</strong> : autre défi de ce projet a été la surveillance du bouchon pendant l'assèchement de la fouille, qui nous a permis de vérifier les mouvements du bouchon en temps réel (à l’aide du système Cyclops et d’une surveillance manuelle), ainsi que de contrôler la nappe phréatique à l'extérieur et à l'intérieur de la fouille."
                },
                section3: {
                    t1: "Réalisation d’un bouchon",
                    p: "Le bétonnage du bouchon a été réalisé à l'aide du système « dobber ». Il s’agit d’un lourd disque d’environ 1 200kg relié à un tube plongeur et à un flotteur. Il est placé au fond de la fouille puis légèrement relevé, après quoi le bétonnage peut commencer",
                    t2: "Le bouchon a été exécuté en sept jours sans interruption, à une cadence moyenne de bétonnage de 150m<sup>3</sup>/h"
                },
                section4: {
                    p1: "Pour ce projet, Soletanche Polska a également réalisé:",
                    p2: "<ul><li>• Le test micropieux avec une visibilité de quelques dizaines de centimètres.</li><li>• La mise en place de coffrages pour les fosses d’ascenseurs.</li><li>• Le contrôle et suivi des mouvements du radier.</li><li>• Le pompage de décompression (limité) tant que le radier définitif n’a pas été réalisé et fourniture des puits.</li></ul>",
                    t1: "Le projet le plus ambitieux conçu et executé par Soletanche Polska.",
                    t2: "Bétonnage sous l’eau record",
                    p3: "La fouille clé en main pour la construction du musée de la Seconde Guerre mondiale est le projet le plus ambitieux conçu et exécuté par Soletanche Polska.",
                    p4: "Nous avons terminé en établissant un nouveau record de bétonnage immergé. 25 000m<sup>3</sup> de béton coulé en une seule fois en 7 jours et 7 nuits.",
                    youtube: "_8S558IniJM"
                },
                section5: {
                    t1: "Réalisé en sept mois, plus respectueux de l’environnement et exécuté sans accident, ce projet illustre l’expertise du groupe Soletanche Bachy.",
                    p1: "Nous sommes heureux d'avoir mis en œuvre notre solution alternative pour mener à bien l'un des plus grands chantiers de béton immergé au monde.",
                    link: {
                        label: "Nos projets de bâtiments et logements",
                        url: "https://soletanche-bachy.com/fr/realisations/#marches=fondations-profondes"
                    }
                }
            },
            es: {
                meta: {
                    url: "museo-sedunda-guerra-mundial-polonia",
                    title: "Soletanche Bachy - Museo de la Segunda Guerra Mundial, Polonia",
                    description: ""
                },
                title: "Second World War<br>Museum, Polonia",
                intro: {
                    text: "En Gdansk, en la ciudad donde comenzó la Segunda Guerra Mundial en Polonia, se construyó un museo memorial. Impulsado por el gobierno, este ambicioso proyecto prevé una obra casi completamente soterrada."
                },
                section1: {
                    t1: 'Una "caja" de 14.600m<sup>2</sup> y 22m de profundidad.',
                    p1: 'Ubicada en un área de suelos blandos (orgánico y arenoso), y bordeada por un canal, la "caja" de 14.600m<sup>2</sup> y 22m de profundidad tenía que ser muy impermeable porque el flujo debía ser inferior a -20m<sup>3</sup>/h.',
                    p2: "El desafío fue asumido por Soletanche Polska al ofrecer una alternativa de excavación llave en mano, satisfaciendo las necesidades del cliente, sin la necesidad de realizar el abatimiento de 18m del nivel freático. <br><br>Esta solución requería menos hormigón y otros recursos, lo que reducía la molestia de las partes contiguas y el impacto ambiental.<br><br>Los equipos hicieron una contención perimetral de 509m con un muro pantalla de un metro de espesor y 28m de profundidad. Esta pantalla ha sido equipada con juntas Waterstop gracias a la junta trapezoidal CWS® para mejorar su estanqueidad. Esta junta se ancló en la parte superior con 914 tirantes de 100 t de capacidad.",
                    p3: "Durante la excavación, 195.000m<sup>3</sup> se excavaron mediante dragado, lo que permitió alcanzar el nivel final de la excavación. Se fabricaron micropilotes que sirvieron de anclaje definitivo a la losa futura. El vertido del hormigón de 25.000m<sup>3</sup> de la losa temporal se realizó sin interrupción."
                },
                section2: {
                    p1: "<strong>Un hormigón de calidad</strong>: con este tipo de hormigonado vertido bajo el agua, debe hacerse una elección adecuada del proveedor para tener un hormigón fiable y de buena calidad. Varias plantas de hormigón, plantas auxiliares, camiones adicionales, equipamiento adicional de reserva, personal suplementario y toda la cadena de suministro de materias primas deben estar preparados para intervenir de siete a diez días durante las 24 horas del día.",
                    t1: "Numerosos retos fueron asumidos en el marco de un proyecto fuera de norma",
                    p2: "<strong>Una realización de micropilotes al milímetro</strong>: si la realización de pantallas con juntas trapezoidales CWS<sup>®</sup> ancladas en terrenos mediocre es notable, la realización de los 914 micropilotes y la losa fueron desafíos reales. <br><br>La realización de micropilotes desde una barcaza, en un corte bajo con la obligación de cero defectos, requiere procedimientos y realizaciones impecables. Si las pruebas previas se realizaban al exterior de la excavación, las pruebas de control se realizarían bajo el agua. Por lo tanto, las pruebas fueron asistidas por buzos y se realizaron con éxito.",
                    p3: "<strong>Una organización y una seguridad en la obra irreprochable</strong>: a pesar de la presencia de trabajadores en la obra y un entorno complejo (proximidad a los sitios de construcción de carreteras y sistemas de tratamiento de aguas residuales), la presencia de numerosos subcontratistas y la realización del 70% del proyecto desde las barcazas, con la ayuda de buceadores; Soletanche Polska ha ejecutado los trabajos de acuerdo con plazos estrictos y en total seguridad.",
                    p4: "<strong>Monitoreo permanente</strong>: otro desafío de este proyecto fue el monitoreo del tapón durante el secado de la excavación, que nos permitió verificar los movimientos del tapón en tiempo real (utilizando el sistema Cyclops y un monitoreo manual), así como controlar el nivel freático al exterior e interior de la excavación."
                },
                section3: {
                    t1: "Realización de un tapón",
                    p: 'El hormigonado del tapón se realizó utilizando el sistema "dobber". Es un disco pesado que pesa aproximadamente 1.200kg conectado a un tubo de inmersión y a un flotador. Se coloca en el fondo de la excavación y luego se levanta ligeramente, después de lo cual puede comenzar el hormigonado.',
                    t2: "Esta estructura se realizó en siete días ininterrumpidos, con una cadencia media de hormigonado de 150m<sup>3</sup>/h."
                },
                section4: {
                    p1: "Para este proyecto, Soletanche Polska realizó tambien :",
                    p2: "<ul><li>• La prueba de micropilotes con una visibilidad de unas decenas de centímetros</li><li>• La instalación de encofrado para fosas elevadoras.</li><li>• El control y seguimiento de los movimientos de la losa</li><li>• El bombeo de descompresión (limitado) hasta que se haya completado la losa definitiva y se hayan suministrado los pozos.</li></ul>",
                    t1: "El proyecto más ambicioso diseñado y ejecutado por Soletanche Polska.",
                    t2: "Hormigonado bajo el agua récord.",
                    p3: "La excavación llave en mano para la construcción del museo de la Segunda Guerra Mundial es el proyecto más ambicioso diseñado y ejecutado por Soletanche Polska.",
                    p4: "Terminamos estableciendo un nuevo récord de hormigón sumergido: 25.000m<sup>3</sup> de hormigón vertido en una sola vez en 7 días y 7 noches.",
                    youtube: "_8S558IniJM"
                },
                section5: {
                    t1: "Finalizado en siete meses, demasiado respetuoso con el medio ambiente y ejecutado sin accidentes, este proyecto ilustra la experiencia y conocimiento del grupo Soletanche Bachy.",
                    p1: "Nos complace haber implementado nuestra solución alternativa para llevar a cabo una de las obras de hormigón sumergido más grande en el mundo.",
                    link: {
                        label: "Nuestros proyectos de edificios y residenciales",
                        url: "https://soletanche-bachy.com/es/proyectos/#mercados=cimentacioned-profundas"
                    }
                }
            }
        }
          , u = {
            en: {
                loader: {
                    loading: "Loading",
                    titleA: "The city",
                    titleB: "underground"
                },
                header: {},
                footer: {
                    returnA: "Back to official site",
                    returnB: "Soletanche Bachy"
                },
                popin: {
                    close: "Close"
                },
                pages: {
                    intro: {
                        explore: "explore"
                    },
                    footer: {
                        explore: "Explore"
                    },
                    common: {
                        backToTop: "Back to top",
                        boxLabel: "Before"
                    },
                    chapter: {
                        section2: "The challenge",
                        section3: "Solutions"
                    }
                },
                home: {
                    meta: {
                        title: "Soletanche Bachy - The city underground",
                        description: ""
                    }
                },
                project1: r.en,
                project2: o.en,
                project3: l.en,
                project4: c.en
            },
            fr: {
                loader: {
                    loading: "Chargement",
                    titleA: "La ville",
                    titleB: "sous la ville"
                },
                header: {},
                footer: {
                    returnA: "Retour au site officiel",
                    returnB: "Soletanche Bachy"
                },
                popin: {
                    close: "Fermer"
                },
                pages: {
                    intro: {
                        explore: "explorer"
                    },
                    footer: {
                        explore: "Explorer"
                    },
                    common: {
                        backToTop: "Haut de page",
                        boxLabel: "Avant"
                    },
                    chapter: {
                        section2: "Le challenge",
                        section3: "Solutions"
                    }
                },
                home: {
                    meta: {
                        title: "Soletanche Bachy - La ville sous la ville",
                        description: ""
                    }
                },
                project1: r.fr,
                project2: o.fr,
                project3: l.fr,
                project4: c.fr
            },
            es: {
                loader: {
                    loading: "Cargando",
                    titleA: "La ciudad",
                    titleB: "bajo la ciudad"
                },
                header: {},
                footer: {
                    returnA: "Volver a la página web oficial",
                    returnB: "Soletanche Bachy"
                },
                popin: {
                    close: "Cerrar"
                },
                pages: {
                    intro: {
                        explore: "explora"
                    },
                    footer: {
                        explore: "Explorar"
                    },
                    common: {
                        backToTop: "Volver al principio",
                        boxLabel: "Antes"
                    },
                    chapter: {
                        section2: "El reto",
                        section3: "Soluciones"
                    }
                },
                home: {
                    meta: {
                        title: "Soletanche Bachy - La ciudad bajo la ciudad",
                        description: ""
                    }
                },
                project1: r.es,
                project2: o.es,
                project3: l.es,
                project4: c.es
            }
        };
        a["a"].use(i["a"]);
        var d = new i["a"]({
            fallbackLocale: "en",
            messages: u
        })
          , m = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("main", {
                staticClass: "main-container",
                class: ["is-section-" + e.globalNav.sectionCurrent, "is-section-middle-" + e.globalNav.sectionCurrentMiddle, "is-section-end-" + e.globalNav.sectionCurrentEnd, e.globalNav.isToRight ? "is-to-right" : "is-to-left", {
                    "is-header": e.globalNav.isIntroElements
                }]
            }, [e.display3D ? a("app-bg") : e._e(), a("transition", {
                attrs: {
                    name: "project",
                    duration: {
                        enter: 1e3,
                        leave: 1e3
                    },
                    mode: "out-in"
                }
            }, [e.globalNav.isFadingProject ? e._e() : a("router-view", {
                staticClass: "route"
            })], 1), e.globalNav.isIntroElements ? a("app-nav") : e._e(), a("header", {
                staticClass: "c-page-w header"
            }, [a("div", {
                staticClass: "main-logo"
            }, [a("router-link", {
                staticClass: "icon desktop",
                attrs: {
                    to: "/" + e.$route.params.lang + "/" + e.$t("project1.meta.url")
                }
            }, [a("img", {
                staticClass: "white",
                attrs: {
                    src: n("071b"),
                    srcset: n("28ef") + " 2x, " + n("99b0") + " 4x, " + n("ae1a") + " 5x",
                    width: "244",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            }), a("img", {
                staticClass: "color",
                attrs: {
                    src: n("5134"),
                    srcset: n("ef80") + " 2x, " + n("dbb8") + " 4x, " + n("ec62") + " 5x",
                    width: "244",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            })]), a("router-link", {
                staticClass: "icon mobile",
                attrs: {
                    to: "/" + e.$route.params.lang + "/" + e.$t("project1.meta.url")
                }
            }, [a("img", {
                staticClass: "white",
                attrs: {
                    src: n("f917"),
                    srcset: n("28b3") + " 2x, " + n("8efb") + " 4x, " + n("19f9") + " 5x",
                    width: "41",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            }), a("img", {
                staticClass: "color",
                attrs: {
                    src: n("2010"),
                    srcset: n("897c") + " 2x, " + n("e069") + " 4x, " + n("c0d7") + " 5x",
                    width: "41",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            })])], 1), a("app-mobile-nav")], 1), a("transition", {
                attrs: {
                    name: "prev-next",
                    duration: {
                        enter: 1e3,
                        leave: 1e3
                    }
                }
            }, [0 !== e.globalNav.sectionCurrent || e.globalNav.isFadingProject || e.globalNav.isFadingSection ? e._e() : a("app-prev-next")], 1), a("transition", {
                attrs: {
                    name: "footer",
                    duration: {
                        enter: 1e3,
                        leave: 2e3
                    },
                    mode: "out-in"
                }
            }, [a("app-footer")], 1), a("app-mobile-menu"), a("transition", {
                attrs: {
                    name: "modal",
                    duration: {
                        enter: 2e3,
                        leave: 1e3
                    },
                    mode: "out-in"
                }
            }, [e.globalNav.modalVideo ? a("app-modal-video", {
                attrs: {
                    "youtube-id": e.globalNav.modalVideo
                }
            }) : e._e()], 1), a("transition", {
                attrs: {
                    name: "loader",
                    duration: {
                        enter: 0,
                        leave: 1500
                    },
                    mode: "out-in"
                }
            }, [e.globalNav.isLoaded ? e._e() : a("app-loader")], 1)], 1)
        }
          , h = []
          , p = (n("c5f6"),
        n("7514"),
        n("7f7f"),
        n("5d73"))
          , f = n.n(p)
          , A = n("0a0d")
          , g = n.n(A)
          , v = n("d225")
          , b = n("b0b4")
          , x = function() {
            function e() {
                Object(v["a"])(this, e),
                this.width = document.body.clientWidth || window.innerWidth,
                this.height = window.innerHeight,
                this.delay = 300,
                this.optimizePhone = !1,
                this.optimizeRefresh = !0,
                this._onResizedCb = [],
                window.addEventListener("resize", this._onResize.bind(this), !1)
            }
            return Object(b["a"])(e, [{
                key: "addOnResized",
                value: function(e) {
                    return this.removeOnResized(e),
                    this._onResizedCb.push(e),
                    !0
                }
            }, {
                key: "removeOnResized",
                value: function(e) {
                    var t = this._onResizedCb.indexOf(e);
                    return t > -1 && (this._onResizedCb.splice(t, 1),
                    !0)
                }
            }, {
                key: "dispatch",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.width
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.height;
                    this._dispatchResized(e, t)
                }
            }, {
                key: "_onResize",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = g()();
                    if (this.optimizeRefresh)
                        if (clearTimeout(this._resizedTo),
                        t || this._lastResized && n - this._lastResized > this.delay - 1) {
                            var a = document.body.clientWidth
                              , s = window.innerHeight
                              , i = this.width
                              , r = this.height;
                            this.optimizePhone && a !== i || Math.abs(s - r),
                            this._dispatchResized(a, s)
                        } else
                            this._resizedTo = setTimeout(this._onResize.bind(this), this.delay);
                    else {
                        var o = document.body.clientWidth || window.innerWidth
                          , l = window.innerHeight;
                        this._dispatchResized(o, l)
                    }
                    this._lastResized = n
                }
            }, {
                key: "_dispatchResized",
                value: function(e, t) {
                    this.width = e,
                    this.height = t;
                    var n = !0
                      , a = !1
                      , s = void 0;
                    try {
                        for (var i, r = f()(this._onResizedCb); !(n = (i = r.next()).done); n = !0) {
                            var o = i.value;
                            o(e, t)
                        }
                    } catch (l) {
                        a = !0,
                        s = l
                    } finally {
                        try {
                            n || null == r.return || r.return()
                        } finally {
                            if (a)
                                throw s
                        }
                    }
                }
            }]),
            e
        }()
          , y = x
          , w = new y
          , C = {
            created: function() {
                this.resize = w
            },
            mounted: function() {
                this.onResized && (this._mixinOnResizedDisptacher = this.onResized.bind(this),
                this.resize.addOnResized(this._mixinOnResizedDisptacher))
            },
            destroyed: function() {
                this._mixinOnResizedDisptacher && this.resize.removeOnResized(this._mixinOnResizedDisptacher)
            }
        }
          , M = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("canvas", {
                staticClass: "bg"
            })
        }
          , _ = []
          , T = (n("ac6a"),
        n("75fc"))
          , S = n("5a89")
          , L = n("308d")
          , E = n("6bb5")
          , P = n("2a88")
          , j = n("4e2b")
          , O = n("a4bb")
          , I = n.n(O)
          , k = n("5176")
          , D = n.n(k)
          , z = {
            VIGNETTING: [{
                CENTER_COLOR: 262177,
                CENTER_OPACITY: 0,
                CORNERS_COLOR: 262177,
                CORNERS_OPACITY: .54
            }, {
                CENTER_COLOR: 15066597,
                CENTER_OPACITY: -.03,
                CORNERS_COLOR: 15066597,
                CORNERS_OPACITY: .9
            }, {
                CENTER_COLOR: 671878,
                CENTER_OPACITY: 0,
                CORNERS_COLOR: 671878,
                CORNERS_OPACITY: .3
            }, {
                CENTER_COLOR: 15066597,
                CENTER_OPACITY: 0,
                CORNERS_COLOR: 15066597,
                CORNERS_OPACITY: 0
            }],
            LIGHT: [{
                AMBIANT: {
                    COLOR: 12303305,
                    INTENSITY: 1.2
                },
                SUN: {
                    COLOR: 16774089,
                    INTENSITY: .9
                }
            }, {
                AMBIANT: {
                    COLOR: 13750737,
                    INTENSITY: 1.5
                },
                SUN: {
                    COLOR: 16776696,
                    INTENSITY: .93
                }
            }],
            MODEL: {
                GROUND: 12698049,
                GROUND_DARK: 7828339,
                CUBE: 11513775,
                GREY: 10066329,
                RED: 13715266,
                BLUE: 2053883,
                YELLOW: 16760342,
                WIREFRAME_TRANSITION_COLOR: 16711680,
                WIREFRAME_TRANSITION_OPACITY: .25,
                WIREFRAME_CUBE_COLOR: 4671303,
                WIREFRAME_CUBE_OPACITY: .25
            },
            FOG: {
                COLOR: 4079953,
                OPACITY: .31
            },
            BLUEPRINT: {
                LINE: 16777215,
                LINE_OPACITY: .25,
                BACKGROUND: 671878,
                BOX: 16722731
            },
            XRAYS: {
                TRANSPARENT: 9898001,
                MASK: 15360593
            },
            BACKGROUNDS: {
                STATE1: 8828357,
                STATE2: 14146257,
                STATE4: 1449310
            },
            LAYERS: [12762798, 12762798, 12762798]
        }
          , R = z
          , N = n("9efc")
          , B = n.n(N)
          , F = n("47a3")
          , U = n.n(F)
          , G = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, {
                screenSize: {
                    type: "v2",
                    value: new S["Xb"](640,360)
                },
                textureSize: {
                    type: "v2",
                    value: new S["Xb"](64,64)
                }
            }, e])
        }
          , H = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(v["a"])(this, e);
            var n = new S["Jb"]({
                name: "FullscreenMaterial",
                vertexShader: B.a,
                fragmentShader: U.a,
                uniforms: G(t.uniforms),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()({
                    USE_MAP: ""
                }, t.defines ? t.defines : {}),
                lights: !1
            });
            return n.depthWrite = !1,
            n
        }
          , W = n("4aa6")
          , Y = n.n(W)
          , q = !0
          , Z = function(e, t, n) {
            var a = {
                x: e.x - t.x,
                y: e.y - t.y,
                z: e.z - t.z
            }
              , s = {
                x: n.x - t.x,
                y: n.y - t.y,
                z: n.z - t.z
            }
              , i = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
              , r = {
                x: a.x / i,
                y: a.y / i,
                z: a.z / i
            }
              , o = Math.sqrt(s.x * s.x + s.y * s.y + s.z * s.z)
              , l = {
                x: s.x / o,
                y: s.y / o,
                z: s.z / o
            }
              , c = r.x * l.x + r.y * l.y + r.z * l.z;
            return 180 * Math.acos(c) / Math.PI
        };
        function X(e) {
            S["j"].call(this),
            this.type = "WireframeGeometry";
            var t, n, a, s, i, r, o, l, c = [], u = [0, 0], d = {}, m = ["a", "b", "c"];
            if (e && e.isGeometry) {
                var h = e.faces;
                for (t = 0,
                a = h.length; t < a; t++) {
                    var p = h[t];
                    for (n = 0; n < 3; n++) {
                        var f = 90
                          , A = 90;
                        q && (f = Z(e.vertices[p[m[n]]], e.vertices[p[m[(n + 1) % 3]]], e.vertices[p[m[(n + 2) % 3]]]),
                        A = Z(e.vertices[p[m[(n + 1) % 3]]], e.vertices[p[m[n]]], e.vertices[p[m[(n + 2) % 3]]])),
                        (f > 85 || A > 85) && (i = p[m[n]],
                        r = p[m[(n + 1) % 3]],
                        u[0] = Math.min(i, r),
                        u[1] = Math.max(i, r),
                        o = u[0] + "," + u[1],
                        void 0 === d[o] && (d[o] = {
                            index1: u[0],
                            index2: u[1]
                        }))
                    }
                }
                for (o in d)
                    s = d[o],
                    l = e.vertices[s.index1],
                    c.push(l.x, l.y, l.z),
                    l = e.vertices[s.index2],
                    c.push(l.x, l.y, l.z)
            }
            this.addAttribute("position", new S["B"](c,3))
        }
        X.prototype = Y()(S["j"].prototype),
        X.prototype.constructor = X;
        var Q = n("0c2e")
          , V = n.n(Q)
          , J = new S["bb"]
          , K = function(e) {
            return e.geometry.isBufferGeometry ? (new S["E"]).fromBufferGeometry(e.geometry) : e.geometry
        }
          , $ = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = n.bakeFromMatrix
              , s = void 0 === a || a
              , i = n.meshPositions
              , r = void 0 === i ? null : i
              , o = n.uv
              , l = void 0 !== o && o
              , c = K(t);
            l || (c.faceVertexUvs = [[]],
            c.uvsNeedUpdate = !1);
            var u = !0
              , d = !1
              , m = void 0;
            try {
                for (var h, p = function() {
                    var e = h.value
                      , n = K(e);
                    l || (n.faceVertexUvs = [[]],
                    n.uvsNeedUpdate = !1),
                    r ? r.forEach(function(e) {
                        e.applyMatrix(e.parent.matrixWorld),
                        c.merge(n, e.matrix)
                    }) : s ? (e.applyMatrix(e.parent.matrixWorld),
                    c.merge(n, e.matrix)) : (e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                    c.merge(n, J))
                }, A = f()(e); !(u = (h = A.next()).done); u = !0)
                    p()
            } catch (g) {
                d = !0,
                m = g
            } finally {
                try {
                    u || null == A.return || A.return()
                } finally {
                    if (d)
                        throw m
                }
            }
            return c.boundingBox = null,
            c.boundingSphere = null,
            t.geometry = c,
            t
        }
          , ee = $
          , te = (n("14b9"),
        n("a745"))
          , ne = n.n(te)
          , ae = n("7618")
          , se = n("d138")
          , ie = n.n(se)
          , re = function(e) {
            return Object(ae["a"])(e) === Object(ae["a"])(!0)
        }
          , oe = function() {
            function e(t, n, a, s, i, r, o, l) {
                Object(v["a"])(this, e),
                this.time1 = t,
                this.time2 = n,
                this.val1 = a,
                this.val2 = s,
                this.bezier = ie()(i, r, o, l)
            }
            return Object(b["a"])(e, [{
                key: "distance",
                value: function(e) {
                    return e < this.time1 ? this.time1 - e : e > this.time2 ? e - this.time2 : 0
                }
            }, {
                key: "getValue",
                value: function(e) {
                    if (e < this.time1)
                        return this.val1;
                    if (e > this.time2)
                        return this.val2;
                    var t = (e - this.time1) / (this.time2 - this.time1);
                    return this.bezier(t) * (this.val2 - this.val1) + this.val1
                }
            }]),
            e
        }()
          , le = function(e) {
            function t() {
                return Object(v["a"])(this, t),
                Object(L["a"])(this, Object(E["a"])(t).apply(this, arguments))
            }
            return Object(j["a"])(t, e),
            Object(b["a"])(t, [{
                key: "getValue",
                value: function(e) {
                    if (e < this.time1)
                        return this.val1;
                    if (e > this.time2)
                        return this.val2;
                    for (var t = (e - this.time1) / (this.time2 - this.time1), n = this.bezier(t), a = [], s = 0; s < this.val1.length; s++)
                        a[s] = n * (this.val2[s] - this.val1[s]) + this.val1[s];
                    return a
                }
            }]),
            t
        }(oe)
          , ce = function() {
            function e(t, n) {
                Object(v["a"])(this, e),
                this.time1 = this.time2 = t,
                this.val = n
            }
            return Object(b["a"])(e, [{
                key: "distance",
                value: function(e) {
                    return e < this.time1 ? this.time1 - e : e > this.time1 ? e - this.time1 : 0
                }
            }, {
                key: "getValue",
                value: function() {
                    return this.val
                }
            }]),
            e
        }()
          , ue = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Object(v["a"])(this, e),
                this.equations = [];
                for (var s = [], i = 0 === n.length || re(n[0]) ? n.length : n.length - 1, r = 0; r < i; r++)
                    this.add.apply(this, [t[r], t[r + 1], n[r], n[r + 1]].concat(Object(T["a"])(a ? a[r] : s)))
            }
            return Object(b["a"])(e, [{
                key: "add",
                value: function(e, t, n, a) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5
                      , i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0
                      , r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .5
                      , o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1;
                    if (e > t) {
                        var l = e;
                        e = t,
                        t = l,
                        l = n,
                        n = a,
                        a = l
                    }
                    if (ne()(n)) {
                        var c = new le(e,t,n,a,s,i,r,o);
                        this.equations.push(c)
                    } else if (re(n)) {
                        var u = new ce(e,n);
                        this.equations.push(u)
                    } else {
                        var d = new oe(e,t,n,a,s,i,r,o);
                        this.equations.push(d)
                    }
                }
            }, {
                key: "getValue",
                value: function(e) {
                    var t = this.equations.reduce(function(t, n) {
                        return n.time1 > e && t.time1 < e ? t : t.time1 > e && n.time1 < e ? n : t.distance(e) < n.distance(e) ? t : n
                    });
                    return t.getValue(e)
                }
            }]),
            e
        }()
          , de = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                Object(v["a"])(this, e),
                this.startTime = window.performance.now(),
                this.endTime = this.startTime,
                this.to = 0,
                this.easing = [.5, 0, .5, 1],
                this._repeat = 0,
                this._yoyo = !1,
                this._timeline = new ue,
                this._onTick = function() {
                    return 0
                }
                ,
                this._onChange = function() {
                    return 0
                }
                ,
                this._onEnd = function() {
                    return 0
                }
                ,
                e.list.push(this),
                this.add(t),
                this.tick = this.tick.bind(this),
                this.tick(this.startTime)
            }
            return Object(b["a"])(e, [{
                key: "add",
                value: function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.from, a = void 0 === n ? this.to : n, s = t.to, i = void 0 === s ? 1 : s, r = t.duration, o = void 0 === r ? 1e3 : r, l = t.delay, c = void 0 === l ? 0 : l, u = t.easing, d = void 0 === u ? this.easing : u, m = t.repeat, h = void 0 === m ? 0 : m, p = t.yoyo, f = void 0 !== p && p, A = this.endTime + c;
                    this.endTime = A + o,
                    (e = this._timeline).add.apply(e, [A, this.endTime, a, i].concat(Object(T["a"])(d))),
                    h === 1 / 0 && (console.error("If you need a tween with infinity repeat use the syntax: tween.repeat(Infinity)"),
                    this.repeat(1 / 0),
                    h = 1);
                    for (var g = 0; g < h; g++)
                        if (f && g % 2 === 0) {
                            var v = [1 - d[2], 1 - d[3], 1 - d[0], 1 - d[1]];
                            this.add({
                                from: i,
                                to: a,
                                duration: o,
                                delay: 0,
                                easing: v
                            }),
                            this.endTime += c
                        } else
                            this.add({
                                from: a,
                                to: i,
                                duration: o,
                                delay: c,
                                easing: d
                            });
                    return this.start(),
                    this
                }
            }, {
                key: "repeat",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return this._repeat = e,
                    this
                }
            }, {
                key: "yoyo",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this._yoyo = e,
                    this
                }
            }, {
                key: "_getFakeTime",
                value: function(e) {
                    if (this._repeat < 1)
                        return e;
                    var t = this.endTime - this.startTime
                      , n = Math.min(Math.floor((e - this.startTime) / t), this._repeat)
                      , a = e - n * t;
                    return this._yoyo && n % 2 === 1 ? this.endTime - a + this.startTime : a
                }
            }, {
                key: "tick",
                value: function(e) {
                    var t = this._getFakeTime(e)
                      , n = this._timeline.getValue(t)
                      , a = this.endTime + this._repeat * (this.endTime - this.startTime);
                    return n !== this.value && (this.value = n,
                    this._onChange(n)),
                    this._onTick(n),
                    e >= a ? (this._onEnd(n),
                    this.remove()) : this.raf = requestAnimationFrame(this.tick),
                    this
                }
            }, {
                key: "start",
                value: function() {
                    e.list.indexOf(this) < 0 && (e.list.push(this),
                    cancelAnimationFrame(this.raf),
                    this.raf = requestAnimationFrame(this.tick))
                }
            }, {
                key: "remove",
                value: function() {
                    cancelAnimationFrame(this.raf);
                    var t = e.list.indexOf(this);
                    return t > -1 && e.list.splice(t, 1),
                    this
                }
            }, {
                key: "onTick",
                value: function(e) {
                    return this._onTick = e,
                    this
                }
            }, {
                key: "onChange",
                value: function(e) {
                    return this._onChange = e,
                    this
                }
            }, {
                key: "onEnd",
                value: function(e) {
                    return this._onEnd = e,
                    this
                }
            }]),
            e
        }();
        de.list = [],
        de.removeAll = function() {
            while (de.list.length > 0)
                de.list.pop().remove()
        }
        ;
        var me = function() {
            function e() {
                Object(v["a"])(this, e),
                this.init()
            }
            return Object(b["a"])(e, [{
                key: "init",
                value: function() {
                    this._list = [],
                    this._onceList = []
                }
            }, {
                key: "add",
                value: function() {
                    var e;
                    (e = this._list).push.apply(e, arguments)
                }
            }, {
                key: "addOnce",
                value: function() {
                    var e;
                    (e = this._onceList).push.apply(e, arguments)
                }
            }, {
                key: "remove",
                value: function() {
                    for (var e = this, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                        n[a] = arguments[a];
                    n.forEach(function(t) {
                        var n = e._list.indexOf(t);
                        n > -1 && e._list.splice(n, 1)
                    }),
                    n.forEach(function(t) {
                        var n = e._onceList.indexOf(t);
                        n > -1 && e._onceList.splice(n, 1)
                    })
                }
            }, {
                key: "removeAll",
                value: function() {
                    this.init()
                }
            }, {
                key: "dispatch",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    var a = [].concat(Object(T["a"])(this._list), Object(T["a"])(this._onceList));
                    this._onceList = [],
                    a.forEach(function(e) {
                        return e.apply(void 0, t)
                    })
                }
            }]),
            e
        }()
          , he = n("f499")
          , pe = n.n(he)
          , fe = function() {
            var e = this
              , t = e.$createElement;
            e._self._c;
            return e._m(0)
        }
          , Ae = [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "view"
            }, [n("h1", {
                staticClass: "title"
            }, [e._v("\n        404\n    ")]), n("p", {
                staticClass: "message"
            }, [e._v("\n        Sorry, the page cannot be found.\n    ")])])
        }
        ]
          , ge = (n("ac8c"),
        n("2877"))
          , ve = {}
          , be = Object(ge["a"])(ve, fe, Ae, !1, null, "7b323ffe", null)
          , xe = be.exports
          , ye = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "c-project"
            }, [a("transition", {
                attrs: {
                    name: "project",
                    duration: {
                        enter: 2200,
                        leave: 2e3
                    }
                },
                on: {
                    "after-enter": function(t) {
                        e.updateSection()
                    }
                }
            }, [e.globalNav.isIntroElements ? a("section", {
                staticClass: "c-section c-section-intro"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "t-text-sm text",
                domProps: {
                    innerHTML: e._s(e.$t("project2.intro.text"))
                }
            }), a("button-explore", [e._v("\n                    " + e._s(e.$t("pages.footer.explore")) + "\n                ")])], 1)]) : a("div", [a("section", {
                ref: "section1",
                staticClass: "c-section c-section-1"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("div", {
                staticClass: "double-top u-marg-t-md u-marg-b-xxl u-marg-b-sm@sm"
            }, [a("p", {
                staticClass: "t-text-md u-relative u-marg-l-6of28 u-w-8of28 u-marg-l-3of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project2.section1.p1"))
                }
            })]), a("h2", {
                staticClass: "t-h1 u-marg-t-lg u-marg-l-1of28 u-w-9of28 u-marg-l-2of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section1.t1"))
                }
            })])])]), a("section", {
                ref: "section2",
                staticClass: "c-section c-section-2"
            }, [e.redBoxEnabled ? [a("div", {
                ref: "boxTopDisplay",
                staticClass: "c-box-top-display"
            }, [a("span", {
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.common.boxLabel"))
                }
            })]), a("div", {
                ref: "boxTopSelect",
                staticClass: "c-box-top-select"
            })] : e._e(), a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-absolute t-text-xl u-marg-l-6of28 u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec2chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec2chap2",
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })])]), a("p", {
                staticClass: "t-text-md u-relative u-marg-l-18of28 u-w-8of28 u-marg-t-lg u-opacity-10 u-marg-b-md u-marg-l-16of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project2.section2.p1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-18of28 u-w-6of28 u-color-white-blue u-marg-b-md u-marg-l-16of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section2.p2"))
                }
            }), a("app-parallax", {
                staticClass: "u-relative u-marg-l-6of28 u-w-9of28 u-marg-b-md u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section2.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-18of28 u-w-6of28 u-color-white-blue u-marg-b-lg u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section2.p3"))
                }
            })], 1)], 2), a("section", {
                ref: "section3",
                staticClass: "c-section c-section-3"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec3chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec3chap2",
                staticClass: "text u-color-blue",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })])]), a("p", {
                staticClass: "t-text-md u-marg-b-md u-marg-t-xxl u-marg-l-18of28 u-w-8of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section3.p"))
                }
            })])]), a("section", {
                ref: "section4",
                staticClass: "c-section c-section-4"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("app-parallax", {
                staticClass: "u-marg-t-sm u-marg-b-sm u-marg-l-6of28 u-w-13of28 u-color-grey-dark text u-marg-l-3of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section4.t1"))
                }
            })]), a("div", {
                staticClass: "relative"
            }, [a("div", {
                staticClass: "c-video-button u-w-10of28 u-marg-l-6of28 u-marg-t-lg absolute u-marg-l-3of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm"
            }, [a("button", {
                staticClass: "vb-height",
                on: {
                    click: function(t) {
                        e.openPopin(e.$t("project2.section4.youtube"))
                    }
                }
            }, [a("app-parallax", {
                staticClass: "relative-block"
            }, [a("img", {
                staticClass: "vb-embed",
                attrs: {
                    src: n("7794")
                }
            })]), a("div", {
                staticClass: "vb-play"
            }, [a("img", {
                attrs: {
                    width: "117",
                    height: "117",
                    src: n("3345"),
                    alt: "Play"
                }
            })])], 1)]), a("p", {
                staticClass: "t-text-md u-marg-b-sm u-marg-t-md u-marg-l-18of28 u-w-8of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section4.p1"))
                }
            }), a("div", {
                staticClass: "u-w-10of28 img-container u-marg-l-18of28 u-marg-t-md u-marg-l-16of28@xl u-w-10of12@sm u-marg-l-1of12@sm u-marg-b-sm"
            }, [a("app-parallax", {
                staticClass: "absolute-box",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "img-embed",
                attrs: {
                    src: n("727b")
                }
            })])], 1)]), a("div", {
                staticClass: "double-bottom"
            }, [a("div", {
                staticClass: "u-marg-l-1of28 u-w-15of28 u-bg-red u-pad-y-1 u-marg-l-0@sm u-w-100@sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-l-5of15 u-marg-t-sm u-marg-b-sm u-w-8of15 u-color-white u-marg-l-1of15@xl u-w-13of15@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section4.t2"))
                }
            })])], 1), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-t-md u-w-6of28 u-marg-l-2of28 u-color-grey-dark u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section4.p2"))
                }
            })]), a("div", {
                staticClass: "double-bottom u-marg-b-md u-marg-b-sm@sm"
            }, [a("p", {
                staticClass: "t-text-sm u-relative u-marg-t-lg u-marg-l-6of28 u-w-6of28 u-color-grey-dark u-marg-l-3of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm u-marg-b-sm"
            }, [a("span", {
                staticClass: "o-cross--red"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project2.section4.p3"))
                }
            })]), a("div", {
                staticClass: "u-w-12of28 img-container-abs u-marg-l-4of28 u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("app-parallax", {
                staticClass: "absolute-box",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "img-embed",
                attrs: {
                    src: n("01b3")
                }
            })])], 1)])], 1)]), a("section", {
                ref: "section5",
                staticClass: "c-section c-section-5"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("div", {
                staticClass: "double-top u-marg-t-sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-b-sm u-color-red u-marg-l-2of28 u-w-13of28 u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section5.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-l-2of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project2.section5.p1"))
                }
            })], 1), a("div", {
                staticClass: "foot u-marg-l-2of28 u-marg-r-2of28"
            }, [a("button-project", {
                attrs: {
                    link: e.$t("project2.section5.link.url")
                }
            }, [e._v("\n                            " + e._s(e.$t("project2.section5.link.label")) + "\n                        ")])], 1)])]), a("app-section-footer", {
                ref: "section6",
                staticClass: "c-section c-section-6",
                attrs: {
                    project: 2
                },
                on: {
                    "to-project": e.backToTop
                }
            }), a("button-scroll-top", {
                staticClass: "c-button-scroll-top u-none@md",
                attrs: {
                    "is-visible": e.onBottomTop
                },
                on: {
                    click: function(t) {
                        e.backToTop()
                    }
                }
            }), a("app-section-nav", {
                on: {
                    "scroll-section": e.scrollToSection
                }
            })], 1)])], 1)
        }
          , we = []
          , Ce = (n("20d6"),
        function() {
            function e() {
                Object(v["a"])(this, e),
                this.curveReconstructionFrames = 0,
                this.smoothScrollPower = 100,
                this.lastTime = window.performance.now(),
                this.realY = 0,
                this.smoothY = 0,
                this.delayedY = 0,
                this.winH = -1,
                this.pageH = -1,
                this.realVelocity = 0,
                this.smoothVelocity = 0,
                this.delayedVelocity = 0,
                this._onScrollCb = [],
                this._onSmoothScrollCb = [],
                this._onScroll = this._onScroll.bind(this),
                document.addEventListener("scroll", this._onScroll, !1),
                this._initScrollCurveReconstruction(0),
                this._update = this._update.bind(this),
                this._raf = requestAnimationFrame(this._update)
            }
            return Object(b["a"])(e, [{
                key: "dispose",
                value: function() {
                    cancelAnimationFrame(this._raf),
                    this._onScrollCb = [],
                    this._onSmoothScrollCb = [],
                    document.removeEventListener("scroll", this._onScroll, !1)
                }
            }, {
                key: "reset",
                value: function(e) {
                    this.realY = e,
                    this.smoothY = e,
                    this.delayedY = e,
                    this.realVelocity = 0,
                    this.smoothVelocity = 0,
                    this.delayedVelocity = 0,
                    this._initScrollCurveReconstruction(e),
                    this.update(window.performance.now(), !0)
                }
            }, {
                key: "resizeWindow",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1
                      , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.winH = e,
                    t && this.update(window.performance.now(), !0)
                }
            }, {
                key: "resizePage",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    this.pageH = e
                }
            }, {
                key: "addOnScroll",
                value: function(e) {
                    return this.removeOnScroll(e),
                    this._onScrollCb.push(e),
                    !0
                }
            }, {
                key: "removeOnScroll",
                value: function(e) {
                    var t = this._onScrollCb.indexOf(e);
                    return t > -1 && (this._onScrollCb.splice(t, 1),
                    !0)
                }
            }, {
                key: "addOnSmoothScroll",
                value: function(e) {
                    return this.removeOnScroll(e),
                    this._onSmoothScrollCb.push(e),
                    !0
                }
            }, {
                key: "removeOnSmoothScroll",
                value: function(e) {
                    var t = this._onSmoothScrollCb.indexOf(e);
                    return t > -1 && (this._onSmoothScrollCb.splice(t, 1),
                    !0)
                }
            }, {
                key: "_initScrollCurveReconstruction",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = [], n = 0; n < this.curveReconstructionFrames; n++)
                        t[n] = e;
                    this._history = t
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.performance.now()
                      , n = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t - this.lastTime);
                    this.lastTime = t;
                    var a = this.realY;
                    this.winH > -1 && this.pageH > -1 && (a = Math.max(0, Math.min(a, this.pageH - this.winH)));
                    this._getReconstructScroll(a);
                    this._hasScrolled && (a = window.pageYOffset || document.documentElement.scrollTop,
                    this.realVelocity = (a - this.realY) / n,
                    this.realY = a,
                    this._hasScrolled = !1,
                    e._dispatch(this._onScrollCb, this.realY))
                }
            }, {
                key: "_update",
                value: function(e) {
                    this.update(e),
                    this._raf = requestAnimationFrame(this._update)
                }
            }, {
                key: "_onScroll",
                value: function() {
                    this._hasScrolled = !0
                }
            }, {
                key: "_getReconstructScroll",
                value: function(e) {
                    var t = this.curveReconstructionFrames;
                    if (t < 2)
                        return e;
                    var n = this._history
                      , a = n.shift();
                    n.push(e);
                    for (var s = 0; s < t - 1; s++)
                        n[s] = (e - a) / (t - 1) + a;
                    return n[0]
                }
            }, {
                key: "y",
                get: function() {
                    return this.realY
                }
            }], [{
                key: "_dispatch",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                        n[a - 1] = arguments[a];
                    var s = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var o, l = f()(e); !(s = (o = l.next()).done); s = !0) {
                            var c = o.value;
                            c.apply(void 0, n)
                        }
                    } catch (u) {
                        i = !0,
                        r = u
                    } finally {
                        try {
                            s || null == l.return || l.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                }
            }]),
            e
        }())
          , Me = Ce
          , _e = new Me
          , Te = {
            created: function() {
                this.scroll = _e
            },
            mounted: function() {
                this.onScroll && this.scroll.addOnScroll(this.onScroll)
            },
            destroyed: function() {
                this.onScroll && this.scroll.removeOnScroll(this.onScroll)
            }
        }
          , Se = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("nav", {
                staticClass: "section-nav"
            }, [n("ul", {
                staticClass: "v-line"
            }, e._l(e.count, function(t) {
                return n("li", {
                    staticClass: "item",
                    style: {
                        top: 100 * t / e.count + "%"
                    }
                })
            }), 0), n("ul", {
                staticClass: "nav"
            }, e._l(4, function(t) {
                var a;
                return n("li", {
                    key: t,
                    staticClass: "item",
                    class: (a = {},
                    a["n" + t] = !0,
                    a["is-selected"] = t === e.globalNav.sectionCurrentMiddle,
                    a["previous"] = t < e.globalNav.sectionCurrentMiddle,
                    a["next"] = t > e.globalNav.sectionCurrentMiddle,
                    a)
                }, [n("button", {
                    staticClass: "color large",
                    class: ["color-" + t],
                    on: {
                        click: function(n) {
                            e.scrollTo(t)
                        }
                    }
                }, [n("span", {
                    staticClass: "number"
                }, [e._v(e._s("0" + t))])]), e._l(["red", "grey", "white"], function(a) {
                    return n("button", {
                        key: a + "boubou",
                        class: ["color-" + a, "small"],
                        on: {
                            click: function(n) {
                                e.scrollTo(t)
                            }
                        }
                    }, [n("span", {
                        staticClass: "number"
                    }, [e._v(e._s("0" + t))])])
                })], 2)
            }), 0)])
        }
          , Le = []
          , Ee = {
            mixins: [C],
            data: function() {
                return {
                    globalNav: $t.globalNav,
                    count: 0,
                    direction: 1
                }
            },
            created: function() {
                this.progress = 0,
                this.gpsPos = [0, 0]
            },
            mounted: function() {
                this.onResized(this.resize.width, this.resize.height)
            },
            methods: {
                onResized: function(e, t) {
                    this.count = Math.floor(t / 100)
                },
                scrollTo: function(e) {
                    this.$emit("scroll-section", e)
                }
            }
        }
          , Pe = Ee
          , je = (n("620a"),
        Object(ge["a"])(Pe, Se, Le, !1, null, "39cf558f", null))
          , Oe = je.exports
          , Ie = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "app-parallax"
            }, [e._t("default")], 2)
        }
          , ke = [];
        function De(e) {
            var t = 0
              , n = 0;
            if (e.offsetParent)
                do {
                    t += e.offsetLeft,
                    n += e.offsetTop
                } while (e = e.offsetParent);return [t, n]
        }
        var ze = {
            mixins: [Te, C],
            props: {
                transform: {
                    type: String,
                    default: ""
                },
                power: {
                    type: Number,
                    default: -.125
                }
            },
            data: function() {
                return {
                    isEnabled: !0
                }
            },
            watch: {
                isEnabled: function() {
                    this.setTransform(!0)
                }
            },
            mounted: function() {
                this.lastTransform = this.transform,
                this.isInside = !1,
                this.$nextTick(this.onResized),
                this._raf = requestAnimationFrame(this.onEnterFrame)
            },
            destroyed: function() {
                cancelAnimationFrame(this._raf)
            },
            methods: {
                onEnterFrame: function() {
                    this._raf = requestAnimationFrame(this.onEnterFrame),
                    this.setTransform()
                },
                onScroll: function() {},
                onResized: function() {
                    this.isEnabled = this.resize.width > 899,
                    this.setData()
                },
                setTransform: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.isEnabled) {
                        var t = this.scroll.realY + this.resize.height / 2
                          , n = this.top + this.height / 2
                          , a = t - n
                          , s = a * this.power
                          , i = "translateY(" + s.toFixed(1) + "px)"
                          , r = Math.abs(a) - this.height / 2 < this.resize.height;
                        if (r) {
                            this.isInside || (this.$el.style.willChange = "transform");
                            var o = this.transform + " " + i;
                            o !== this.lastTransform && (this.$el.style.transform = o,
                            this.lastTransform = o)
                        } else
                            this.isInside && (this.$el.style.willChange = "");
                        this.isInside = r
                    } else
                        e && (this.$el.style.transform = this.transform,
                        this.$el.style.willChange = "")
                },
                setData: function() {
                    this.$el.style.transform = this.transform,
                    this.top = De(this.$el)[1],
                    this.height = this.$el.offsetHeight,
                    this.$el.style.transform = this.lastTransform
                }
            }
        }
          , Re = ze
          , Ne = (n("8ba7"),
        Object(ge["a"])(Re, Ie, ke, !1, null, "81efab2e", null))
          , Be = Ne.exports
          , Fe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", {
                staticClass: "footer"
            }, [0 === e.project ? a("div", {
                staticClass: "bg n0"
            }) : 1 === e.project ? a("div", {
                staticClass: "bg n1"
            }) : 2 === e.project ? a("div", {
                staticClass: "bg n2"
            }) : 3 === e.project ? a("div", {
                staticClass: "bg n3"
            }) : e._e(), a("app-parallax", {
                staticClass: "title u-marg-l-5of28 u-color-white u-marg-l-1of12@sm"
            }, [a("strong", {
                domProps: {
                    innerHTML: e._s(e.title)
                }
            })]), a("app-parallax", {
                staticClass: "u-marg-l-5of28 u-marg-l-1of12@sm"
            }, [a("router-link", {
                staticClass: "c-button link",
                attrs: {
                    to: e.link,
                    event: "disable"
                },
                nativeOn: {
                    click: function(t) {
                        return e.toProject(t)
                    }
                }
            }, [a("span", {
                staticClass: "c-button__out"
            }, [a("img", {
                staticClass: "c-button__icon--left u-opacity-6",
                attrs: {
                    src: n("971a"),
                    width: "19",
                    height: "15",
                    alt: "Left arrow"
                }
            }), a("span", {
                staticClass: "c-button__text text"
            }, [e._v("\n                    " + e._s(e.$t("pages.footer.explore")) + "\n                ")])]), a("span", {
                staticClass: "c-button__hover"
            }, [a("span", {
                staticClass: "c-button__hover-content"
            }, [a("img", {
                staticClass: "c-button__icon--left u-opacity-6",
                attrs: {
                    src: n("2b44"),
                    width: "19",
                    height: "15",
                    alt: "Left arrow"
                }
            }), a("span", {
                staticClass: "c-button__text text"
            }, [e._v("\n                        " + e._s(e.$t("pages.footer.explore")) + "\n                    ")])])])])], 1), e._m(0)], 1)
        }
          , Ue = [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "credits"
            }, [e._v("\n        website by "), n("a", {
                attrs: {
                    href: "https://immersive-g.com/",
                    target: "_blank"
                }
            }, [e._v("Immersive Garden")])])
        }
        ]
          , Ge = {
            mixins: [C],
            components: {
                AppParallax: Be
            },
            props: {
                project: {
                    type: Number
                }
            },
            computed: {
                route: function() {
                    var e = this;
                    return JSON.parse(pe()(Ht.find(function(t) {
                        return t.meta && "project" === t.meta.type && t.meta.project === e.project
                    })))
                },
                title: function() {
                    return this.$t(this.route.name + ".title")
                },
                link: function() {
                    return {
                        name: this.route.name,
                        params: {
                            lang: this.$route.params.lang,
                            slug: this.$t("".concat(this.route.name, ".meta.url"))
                        }
                    }
                }
            },
            methods: {
                toProject: function() {
                    this.$emit("to-project", this.project)
                }
            }
        }
          , He = Ge
          , We = (n("ecb2"),
        Object(ge["a"])(He, Fe, Ue, !1, null, "481b4315", null))
          , Ye = We.exports
          , qe = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                staticClass: "c-button--red",
                on: {
                    click: function(t) {
                        e.explore()
                    },
                    mouseenter: function(t) {
                        e.exploreOver()
                    },
                    mouseleave: function(t) {
                        e.exploreOut()
                    }
                }
            }, [a("span", {
                staticClass: "c-button__out"
            }, [a("span", {
                staticClass: "c-button__text"
            }, [e._t("default")], 2), a("img", {
                staticClass: "c-button__icon--right",
                attrs: {
                    src: n("bb28"),
                    width: "26",
                    height: "28",
                    alt: "Down arrow"
                }
            })]), a("span", {
                staticClass: "c-button__hover"
            }, [a("span", {
                staticClass: "c-button__hover-content"
            }, [a("span", {
                staticClass: "c-button__text"
            }, [e._t("default")], 2), a("img", {
                staticClass: "c-button__icon--right",
                attrs: {
                    src: n("4cdd"),
                    width: "26",
                    height: "28",
                    alt: "Down arrow"
                }
            })])])])
        }
          , Ze = []
          , Xe = {
            data: function() {
                return {
                    locked: !1
                }
            },
            created: function() {
                this.locked || $t.onIntroExploreOut.dispatch()
            },
            methods: {
                explore: function() {
                    console.log("explore"),
                    this.locked || (this.locked = !0,
                    $t.fadeToContent(!0))
                },
                exploreOver: function() {
                    this.locked || $t.onIntroExploreOver.dispatch()
                },
                exploreOut: function() {
                    this.locked || $t.onIntroExploreOut.dispatch()
                }
            }
        }
          , Qe = Xe
          , Ve = (n("a00e"),
        Object(ge["a"])(Qe, qe, Ze, !1, null, "ca37aa44", null))
          , Je = Ve.exports
          , Ke = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("a", {
                staticClass: "c-button--big t-text-md",
                attrs: {
                    href: e.link
                }
            }, [a("span", {
                staticClass: "c-button__out"
            }, [a("span", {
                staticClass: "flex"
            }, [a("span", {
                staticClass: "c-button__text"
            }, [e._t("default")], 2), a("img", {
                staticClass: "c-button__icon--right u-opacity-6",
                attrs: {
                    src: n("971a"),
                    width: "29",
                    height: "27",
                    alt: "Down arrow"
                }
            })])]), a("span", {
                staticClass: "c-button__hover"
            }, [a("span", {
                staticClass: "c-button__hover-content"
            }, [a("span", {
                staticClass: "flex"
            }, [a("span", {
                staticClass: "c-button__text"
            }, [e._t("default")], 2), a("img", {
                staticClass: "c-button__icon--right u-opacity-6",
                attrs: {
                    src: n("2b44"),
                    width: "29",
                    height: "27",
                    alt: "Down arrow"
                }
            })])])])])
        }
          , $e = []
          , et = {
            props: {
                link: {
                    type: String
                }
            }
        }
          , tt = et
          , nt = (n("0e7d"),
        Object(ge["a"])(tt, Ke, $e, !1, null, "7e784f64", null))
          , at = nt.exports
          , st = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                staticClass: "button",
                class: {
                    "is-visible": e.isVisible
                },
                on: {
                    click: function(t) {
                        e.click()
                    }
                }
            }, [a("span", {
                staticClass: "bg"
            }), a("span", {
                staticClass: "t-text-xs u-opacity-7 text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.common.backToTop"))
                }
            }), a("img", {
                staticClass: "icon",
                attrs: {
                    src: n("985b"),
                    width: "26",
                    height: "28",
                    alt: "Down arrow"
                }
            }), a("img", {
                staticClass: "icon--hover",
                attrs: {
                    src: n("619c"),
                    width: "26",
                    height: "28",
                    alt: "Down arrow"
                }
            })])
        }
          , it = []
          , rt = {
            props: {
                isVisible: {
                    type: Boolean
                }
            },
            methods: {
                click: function() {
                    this.$emit("click")
                }
            }
        }
          , ot = rt
          , lt = (n("0209"),
        Object(ge["a"])(ot, st, it, !1, null, "8cb778e0", null))
          , ct = lt.exports
          , ut = function() {
            function e() {
                Object(v["a"])(this, e),
                this._onDown = this._onDown.bind(this),
                this._onUp = this._onUp.bind(this),
                this._downList = {},
                this._upList = {},
                window.document.addEventListener("keydown", this._onDown, !1),
                window.document.addEventListener("keyup", this._onUp, !1)
            }
            return Object(b["a"])(e, [{
                key: "dispose",
                value: function() {
                    window.document.removeEventListener("keydown", this._onDown, !1),
                    window.document.removeEventListener("keyup", this._onUp, !1),
                    delete this._downList,
                    delete this._upList
                }
            }, {
                key: "_onDown",
                value: function(e) {
                    var t = e.code;
                    this._downList[t] && this._downList[t].forEach(function(e) {
                        return e()
                    })
                }
            }, {
                key: "_onUp",
                value: function(e) {
                    var t = e.code;
                    this._upList[t] && this._upList[t].forEach(function(e) {
                        return e()
                    })
                }
            }, {
                key: "onDown",
                value: function(e, t) {
                    this._downList[e] || (this._downList[e] = []),
                    this._downList[e].push(t)
                }
            }, {
                key: "onUp",
                value: function(e, t) {
                    this._upList[e] || (this._upList[e] = []),
                    this._upList[e].push(t)
                }
            }, {
                key: "offDown",
                value: function(e, t) {
                    var n = -1;
                    while (this._downList[e] && (n = this._downList[e].indexOf(t)) > -1)
                        this._downList[e].splice(n, 1)
                }
            }, {
                key: "offUp",
                value: function(e, t) {
                    var n = -1;
                    while (this._upList[e] && (n = this._upList[e].indexOf(t)) > -1)
                        this._upList[e].splice(n, 1)
                }
            }]),
            e
        }()
          , dt = function() {
            function e(t) {
                var n = t.element
                  , a = t.onDragCb
                  , s = void 0 === a ? function() {
                    return 1
                }
                : a
                  , i = t.onMoveCb
                  , r = void 0 === i ? function() {
                    return 1
                }
                : i
                  , o = t.onDropCb
                  , l = void 0 === o ? function() {
                    return 1
                }
                : o
                  , c = t.onSlideCb
                  , u = void 0 === c ? function() {
                    return 1
                }
                : c
                  , d = t.minDist
                  , m = void 0 === d ? 10 : d
                  , h = t.inertia
                  , p = void 0 === h ? .92 : h;
                Object(v["a"])(this, e),
                this.el = n,
                this.onDragCb = s,
                this.onMoveCb = r,
                this.onDropCb = l,
                this.onSlideCb = u,
                this.minDist = m,
                this.inertia = p,
                this.velocity = [0, 0],
                this._onDown = this._onDown.bind(this),
                this._onUp = this._onUp.bind(this),
                this._onMove = this._onMove.bind(this),
                this._onEnterFrame = this._onEnterFrame.bind(this),
                this._setInertia = this._setInertia.bind(this),
                this.el.addEventListener("mousedown", this._onDown),
                this.el.addEventListener("touchstart", this._onDown)
            }
            return Object(b["a"])(e, [{
                key: "dispose",
                value: function() {
                    this.el.removeEventListener("mousedown", this._onDown),
                    this.el.removeEventListener("touchstart", this._onDown)
                }
            }, {
                key: "_onMove",
                value: function(e) {
                    var t = e.touches && e.touches[0] ? e.touches[0] : e
                      , n = t.screenX
                      , a = t.screenY;
                    this.current = {
                        x: n,
                        y: a
                    },
                    this.hasMoved = !0
                }
            }, {
                key: "_onEnterFrame",
                value: function() {
                    if (cancelAnimationFrame(this.raf),
                    this.hasMoved) {
                        var e = this.current.x - this.last.x
                          , t = this.current.y - this.last.y;
                        this.velocity = [e, t],
                        this.dist += Math.sqrt(e * e + t * t),
                        this.last = this.current,
                        this.hasMoved = !1,
                        this.dist >= this.minDist && !this.isDragin && (this.isDragin = !0,
                        this.onDragCb()),
                        this.onMoveCb(e, t)
                    }
                    this.raf = requestAnimationFrame(this._onEnterFrame)
                }
            }, {
                key: "_onDown",
                value: function(e) {
                    var t = e.touches && e.touches[0] ? e.touches[0] : e
                      , n = t.screenX
                      , a = t.screenY;
                    this.init = {
                        x: n,
                        y: a
                    },
                    this.last = {
                        x: n,
                        y: a
                    },
                    this.current = {
                        x: n,
                        y: a
                    },
                    this.dist = 0,
                    this.isDragin = !1,
                    document.body.addEventListener("mouseup", this._onUp),
                    document.body.addEventListener("touchend", this._onUp),
                    document.body.addEventListener("mouseleave", this._onUp),
                    document.body.addEventListener("touchmove", this._onMove),
                    document.body.addEventListener("mousemove", this._onMove),
                    cancelAnimationFrame(this.raf),
                    this.raf = requestAnimationFrame(this._onEnterFrame),
                    "mousedown" === e.type && e.preventDefault(),
                    this._drop()
                }
            }, {
                key: "_onUp",
                value: function() {
                    cancelAnimationFrame(this.raf),
                    document.body.removeEventListener("mouseup", this._onUp),
                    document.body.removeEventListener("touchend", this._onUp),
                    document.body.removeEventListener("mouseleave", this._onUp),
                    document.body.removeEventListener("touchmove", this._onMove),
                    document.body.removeEventListener("mousemove", this._onMove),
                    this.inertia > 0 ? (this.onSlideCb(),
                    this._setInertia()) : this._drop()
                }
            }, {
                key: "_setInertia",
                value: function() {
                    var e = this;
                    this.velocity = this.velocity.map(function(t) {
                        return t * e.inertia
                    }),
                    this.onMoveCb.apply(this, Object(T["a"])(this.velocity)),
                    cancelAnimationFrame(this.raf),
                    Math.abs(this.velocity[0]) < 1 && Math.abs(this.velocity[1]) < 1 ? this._drop() : this.raf = requestAnimationFrame(this._setInertia)
                }
            }, {
                key: "_drop",
                value: function() {
                    this.isDragin && (this.onDropCb(),
                    this.isDragin = !1)
                }
            }]),
            e
        }()
          , mt = function() {
            function e(t) {
                var n = t.el
                  , a = void 0 === n ? document : n
                  , s = t.pixelStep
                  , i = void 0 === s ? 10 : s
                  , r = t.lineHeight
                  , o = void 0 === r ? 40 : r
                  , l = t.pageHeight
                  , c = void 0 === l ? 800 : l
                  , u = t.onTop
                  , d = void 0 === u ? function(e) {
                    return e
                }
                : u
                  , m = t.onDown
                  , h = void 0 === m ? function(e) {
                    return e
                }
                : m
                  , p = t.onStart
                  , f = void 0 === p ? function(e) {
                    return e
                }
                : p;
                Object(v["a"])(this, e),
                this.el = a,
                this.pixelStep = i,
                this.lineHeight = o,
                this.pageHeight = c,
                this.isEnable = !0,
                this._lastWheelTime = g()() - 1e3,
                this.onStart = f,
                this.onTop = d,
                this.onDown = h,
                this._onWheel = this._onWheel.bind(this),
                this.el.addEventListener("wheel", this._onWheel, !1),
                this.el.addEventListener("mousewheel", this._onWheel, !1),
                this.el.addEventListener("DOMMouseScroll", this._onWheel, !1)
            }
            return Object(b["a"])(e, [{
                key: "enable",
                value: function() {
                    this.isEnable = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnable = !1
                }
            }, {
                key: "dispose",
                value: function() {
                    clearTimeout(this._wheelTo),
                    this.el.removeEventListener("wheel", this._onWheel),
                    this.el.removeEventListener("mousewheel", this._onWheel),
                    this.el.removeEventListener("DOMMouseScroll", this._onWheel)
                }
            }, {
                key: "_onWheel",
                value: function(e) {
                    var t = this;
                    if (this.onStart && g()() - this._lastWheelTime > 1e3 && this.onStart(e),
                    this._lastWheelTime = g()(),
                    this.isEnable) {
                        var n = this._normalizeWheel(e);
                        clearTimeout(this._wheelTo),
                        this._wheelTo = setTimeout(function() {
                            t._isWheeling = !1
                        }, 100),
                        Math.abs(-n.pixelY) < 20 && (clearTimeout(this._wheelTo),
                        this._isWheeling = !1),
                        this._isWheeling || Math.abs(-n.pixelY) < 20 || this._lastWheelTime - this._lastWheelEndTime < 1e3 || (this._lastWheelEndTime = this._lastWheelTime,
                        this._wheelEndTimer = setTimeout(function() {
                            clearTimeout(t._wheelTo),
                            t._isWheeling = !1
                        }, 2e3),
                        this._isWheeling = !0,
                        this._isScrollFromWheel = !0,
                        this.onDown && n.pixelY > 0 ? this.onDown(e) : this.onTop && n.pixelY < 0 && this.onTop(e))
                    }
                }
            }, {
                key: "_normalizeWheel",
                value: function(e) {
                    var t = 0
                      , n = 0
                      , a = 0
                      , s = 0;
                    return "detail"in e && (n = e.detail),
                    "wheelDelta"in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
                    n = 0),
                    a = t * this.pixelStep,
                    s = n * this.pixelStep,
                    "deltaY"in e && (s = e.deltaY),
                    "deltaX"in e && (a = e.deltaX),
                    (a || s) && e.deltaMode && (1 == e.deltaMode ? (a *= this.lineHeight,
                    s *= this.lineHeight) : (a *= this.pageHeight,
                    s *= this.pageHeight)),
                    a && !t && (t = a < 1 ? -1 : 1),
                    s && !n && (n = s < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: n,
                        pixelX: a,
                        pixelY: s
                    }
                }
            }]),
            e
        }()
          , ht = mt
          , pt = function(e) {
            window.scrollTo ? window.scrollTo(0, e) : window.scrollTop = e
        }
          , ft = {
            mixins: [C, Te],
            components: {
                AppSectionNav: Oe,
                AppParallax: Be,
                AppSectionFooter: Ye,
                ButtonExplore: Je,
                ButtonProject: at,
                ButtonScrollTop: ct
            },
            data: function() {
                return {
                    globalNav: $t.globalNav,
                    onBottomTop: !0,
                    redBoxEnabled: qt.RED_BLOCK
                }
            },
            watch: {
                "globalNav.isIntro": function(e) {
                    this.updateBody(),
                    this.removeDrag(),
                    e || (this.updateSection(),
                    requestAnimationFrame(this.addDrag))
                }
            },
            created: function() {
                this.onScrollSignal = new me,
                this.sectionSizes = [{
                    onInOut: new me
                }, {
                    onInOut: new me
                }, {
                    onInOut: new me
                }, {
                    onInOut: new me
                }, {
                    onInOut: new me
                }, {
                    onInOut: new me
                }],
                this.keyboard = new ut,
                this.keyboard.onUp("ArrowLeft", this.projectPrev),
                this.keyboard.onUp("ArrowUp", this.backToTop),
                this.keyboard.onUp("ArrowRight", this.projectNext),
                this.keyboard.onUp("ArrowDown", this.projectExplore),
                this.isPhone = this.resize.width < 900,
                this.wheel = new ht({
                    onTop: this.wheelTop,
                    onDown: this.wheelDown
                })
            },
            mounted: function() {
                var e = this;
                this.initParallax(),
                this.attachWillChange([0, 1], ["sec2chap1", "sec2chap2"]),
                this.attachParallax([0, 1], function(t, n, a, s) {
                    var i = (400 * -(s - .5)).toFixed(2);
                    e.$refs.sec2chap1.style.transform = "translateX(-50%) translateX(" + i + "px)",
                    e.$refs.sec2chap2.style.transform = "translateX(50%) translateX(" + i + "px)"
                }),
                this.attachWillChange([0, 1], ["sec3chap1", "sec3chap2"]),
                this.attachParallax([1, 2], function(t, n, a, s) {
                    var i = (400 * -(s - .5)).toFixed(2);
                    e.$refs.sec3chap1.style.transform = "translateX(-50%) translateX(" + i + "px)",
                    e.$refs.sec3chap2.style.transform = "translateX(50%) translateX(" + i + "px)"
                })
            },
            destroyed: function() {
                this.onScrollSignal.removeAll(),
                this.keyboard.dispose(),
                this.wheel.dispose(),
                this.removeDrag()
            },
            methods: {
                wheelTop: function() {
                    this.onBottomTop && !this.globalNav.isIntroElements && this.backToTop()
                },
                wheelDown: function() {
                    this.globalNav.isIntroElements && this.projectExplore()
                },
                addDrag: function() {
                    if (this.redBoxEnabled) {
                        this.removeDrag();
                        var e = this.$refs.boxTopSelect.getBoundingClientRect()
                          , t = e.width
                          , n = e.height;
                        this.dragData = {
                            pos: [Math.round(this.resize.width / 3), Math.round(this.sectionSizes[1].height / 3)],
                            topSize: [t, n],
                            boxSize: [t, 400],
                            areaSize: [this.resize.width, this.sectionSizes[1].height],
                            controller: new dt({
                                element: this.$refs.boxTopSelect,
                                onMoveCb: this.onBoxMove,
                                inertia: .5
                            })
                        },
                        this.dragUpdatePos()
                    }
                },
                removeDrag: function() {
                    this.dragData && (this.dragData.controller.dispose(),
                    delete this.dragData)
                },
                changeProject: function(e) {
                    var t = Ht.find(function(t) {
                        return t.meta && "project" === t.meta.type && t.meta.project === e
                    }).name
                      , n = {
                        name: t,
                        params: {
                            lang: this.$route.params.lang,
                            slug: this.$t("".concat(t, ".meta.url"))
                        }
                    };
                    Wt.push(n)
                },
                projectNext: function() {
                    var e = Ht.filter(function(e) {
                        return e.meta && "project" === e.meta.type && void 0 !== e.meta.project
                    })
                      , t = (this.globalNav.projectCurrent + 1) % e.length;
                    this.globalNav.isIntro ? this.changeProject(t) : this.backToTop(t)
                },
                projectPrev: function() {
                    var e = Ht.filter(function(e) {
                        return e.meta && "project" === e.meta.type && void 0 !== e.meta.project
                    })
                      , t = (this.globalNav.projectCurrent + e.length - 1) % e.length;
                    this.globalNav.isIntro ? this.changeProject(t) : this.backToTop(t)
                },
                projectExplore: function() {
                    this.globalNav.isIntro && $t.fadeToContent()
                },
                scrollToSection: function(e) {
                    var t = window.pageYOffset || document.documentElement.scrollTop
                      , n = e < 1 ? 0 : this.sectionSizes[e - 1].top + 1
                      , a = Math.max(25 * Math.pow(Math.abs(n - t), .5), 500);
                    new de({
                        from: t,
                        to: n,
                        duration: a,
                        easing: [.5, 0, .5, 1]
                    }).onChange(pt).onEnd(pt)
                },
                backToTop: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , n = function() {
                        return null !== t ? e.changeProject(t) : 1
                    };
                    $t.fadeToTop(this.resize.height, n)
                },
                attachWillChange: function(e, t) {
                    var n = this
                      , a = function() {
                        var a = e.map(function(e) {
                            return n.sectionSizes[e].isIn
                        }).reduce(function(e, t) {
                            return e || t
                        });
                        a ? t.forEach(function(e) {
                            n.$refs[e] ? n.$refs[e].classList.add("parallax") : console.error(e + " not found")
                        }) : t.forEach(function(e) {
                            n.$refs[e] ? n.$refs[e].classList.remove("parallax") : console.error(e + " not found")
                        })
                    };
                    e.forEach(function(e) {
                        n.sectionSizes[e].onInOut.add(a)
                    })
                },
                attachParallax: function(e, t) {
                    var n = this;
                    this.onScrollSignal.add(function() {
                        var a = n.sectionSizes.filter(function(t, n) {
                            return e.indexOf(n) > -1
                        }).map(function(e) {
                            return e.isIn
                        }).reduce(function(e, t) {
                            return e || t
                        });
                        if (a) {
                            var s = n.sectionSizes[e[0]].top - n.scroll.realY
                              , i = n.sectionSizes[e[e.length - 1]].top + n.sectionSizes[e[e.length - 1]].height - (n.resize.height + n.scroll.realY)
                              , r = (i + s) / 2
                              , o = e.map(function(e) {
                                return n.sectionSizes[e].scroll
                            }).reduce(function(e, t) {
                                return e + t
                            }) / e.length;
                            t(s, r, i, o)
                        }
                    })
                },
                openPopin: function(e) {
                    $t.globalNav.modalVideo = e
                },
                onResized: function() {
                    this.updateSectionSizes(),
                    this.updateBody()
                },
                onScroll: function() {
                    var e = this;
                    if (!this.globalNav.isIntro) {
                        var t = this.scroll.realY;
                        this.sectionSizes.forEach(function(n) {
                            var a = n.top - e.resize.height
                              , s = n.isIn;
                            n.scroll = (t - a) / (n.top + n.height - a),
                            n.isIn = n.scroll > 0 && n.scroll < 1,
                            s !== n.isIn && n.onInOut.dispatch(n.isIn)
                        });
                        var n = this.sectionSizes.findIndex(function(e) {
                            return e.isIn
                        });
                        if (n > -1) {
                            var a = this.sectionSizes[n]
                              , s = Math.max(0, 1 - (a.top + a.height - t) / this.resize.height);
                            this.globalNav.sectionCurrent = n + 1,
                            this.globalNav.sectionCurrentMiddle = Math.max(Math.round(n + 1 + s), 1),
                            this.globalNav.sectionCurrentEnd = Math.ceil(n + 1 + s),
                            $t.setSectionFade(s),
                            this.onScrollSignal.dispatch(t);
                            var i = t <= 0 || t + this.resize.height >= this.scrollHeight;
                            this.onBottomTop !== i && (this.onBottomTop = i),
                            this.dragUpdatePos(!1, !0)
                        }
                    }
                },
                dragUpdatePos: function() {
                    var e = this
                      , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , a = function(e, t, n) {
                        return Math.min(Math.max(n, e), t)
                    }
                      , s = this.dragData;
                    if (s) {
                        s.pos[0] = a(0, s.areaSize[0] - s.topSize[0], s.pos[0]),
                        s.pos[1] = a(0, s.areaSize[1] - (s.topSize[1] + s.boxSize[1]), s.pos[1]);
                        var i = this.resize.width < 900 ? 2 * this.resize.width : s.pos[0]
                          , r = this.resize.width < 900 ? 2 * this.resize.height : s.pos[1];
                        if (t && window.requestAnimationFrame(function() {
                            var t = "translateX(" + i + "px) translateY(" + r + "px)";
                            e.$refs.boxTopSelect.style.transform = t,
                            e.$refs.boxTopDisplay.style.transform = t
                        }),
                        n) {
                            var o = i
                              , l = r + s.topSize[1] + this.sectionSizes[1].top - this.scroll.realY
                              , c = s.topSize[0]
                              , u = s.topSize[1] + s.boxSize[1]
                              , d = s.topSize[1] / 2;
                            $t.onBoxMove.dispatch({
                                x: (o - 1) / this.resize.width,
                                y: (l - d) / this.resize.height,
                                width: c / this.resize.width,
                                height: (u + d) / this.resize.height
                            })
                        }
                    }
                },
                onBoxMove: function(e, t) {
                    this.dragData.pos[0] += e,
                    this.dragData.pos[1] += t,
                    this.dragUpdatePos()
                },
                updateSection: function() {
                    this.updateSectionSizes(),
                    setTimeout(this.updateSectionSizes, 15),
                    this.globalNav.isIntro || setTimeout(this.addDrag, 1e3)
                },
                updateSectionSizes: function() {
                    if (!this.globalNav.isIntro) {
                        var e = [this.$refs.section1, this.$refs.section2, this.$refs.section3, this.$refs.section4, this.$refs.section5, this.$refs.section6.$el]
                          , t = this.sectionSizes
                          , n = this.$el.getBoundingClientRect()
                          , a = n.top;
                        this.sectionSizes = e.map(function(e, n) {
                            var s = e.getBoundingClientRect()
                              , i = s.top
                              , r = s.height;
                            return {
                                height: r,
                                top: i - a,
                                scroll: 0,
                                isIn: !1,
                                onInOut: t[n].onInOut
                            }
                        }),
                        this.onScroll()
                    }
                },
                updateBody: function() {
                    var e = this;
                    this.$nextTick(function() {
                        e.scrollHeight = window.document.body.scrollHeight
                    })
                }
            }
        }
          , At = {
            mixins: [ft],
            methods: {
                initParallax: function() {},
                videoPlayPause: function() {
                    var e = this.$refs.video;
                    this.videoIsPlaying ? (e.pause(),
                    this.videoIsPlaying = !1) : (e.play(),
                    this.videoIsPlaying = !0)
                }
            }
        }
          , gt = At
          , vt = (n("b6fd"),
        Object(ge["a"])(gt, ye, we, !1, null, "3cbb4882", null))
          , bt = vt.exports
          , xt = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "c-project"
            }, [a("transition", {
                attrs: {
                    name: "project",
                    duration: {
                        enter: 2200,
                        leave: 2e3
                    }
                },
                on: {
                    "after-enter": function(t) {
                        e.updateSection()
                    }
                }
            }, [e.globalNav.isIntroElements ? a("section", {
                staticClass: "c-section c-section-intro"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "t-text-sm text",
                domProps: {
                    innerHTML: e._s(e.$t("project3.intro.text"))
                }
            }), a("button-explore", [e._v("\n                    " + e._s(e.$t("pages.footer.explore")) + "\n                ")])], 1)]) : a("div", [a("section", {
                ref: "section1",
                staticClass: "c-section c-section-1"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "t-h1 u-marg-l-6of28 u-w-9of28 u-marg-t-xs u-marg-b-lg u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-xl@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section1.t1"))
                }
            }), a("p", {
                staticClass: "t-text-md u-w-8of28 u-marg-l-18of28 u-marg-t-md u-w-8of28@xl u-marg-l-16of28@xl u-marg-b-md@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section1.p1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-b-xl u-marg-l-6of28 u-w-6of28 u-relative u-block u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("span", {
                staticClass: "o-cross"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project3.section1.p2"))
                }
            })])])]), a("section", {
                ref: "section2",
                staticClass: "c-section c-section-2"
            }, [e.redBoxEnabled ? [a("div", {
                ref: "boxTopDisplay",
                staticClass: "c-box-top-display"
            }, [a("span", {
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.common.boxLabel"))
                }
            })]), a("div", {
                ref: "boxTopSelect",
                staticClass: "c-box-top-select"
            })] : e._e(), a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-absolute u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec2chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec2chap2",
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })])]), a("p", {
                staticClass: "t-text-sm u-marg-l-18of28 u-w-6of28 u-marg-t-lg u-color-white-blue u-marg-b-md u-relative u-block u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project3.section2.p1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-18of28 u-w-6of28 u-color-white-blue u-marg-b-md u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section2.p2"))
                }
            }), a("div", {
                staticClass: "double-bottom u-relative u-marg-b-xl u-marg-b-sm@sm"
            }, [a("app-parallax", {
                staticClass: "u-relative u-marg-l-6of28 u-w-9of28 u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("h3", {
                staticClass: "t-h1"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project3.section2.t1"))
                }
            })])]), a("p", {
                staticClass: "t-text-sm u-marg-l-3of28 u-w-6of28 u-color-white-blue u-w-8of28@xl u-marg-l-2of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section2.p3"))
                }
            })], 1)])], 2), a("section", {
                ref: "section3",
                staticClass: "c-section c-section-3"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec3chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec3chap2",
                staticClass: "text u-color-blue",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })])]), a("p", {
                staticClass: "t-text-md u-marg-b-md u-marg-t-xxl u-marg-l-6of28 u-w-8of28 u-color-grey-dark u-marg-l-3of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section3.p"))
                }
            })])]), a("section", {
                ref: "section4",
                staticClass: "c-section c-section-4"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("p", {
                staticClass: "t-text-md u-marg-t-md u-marg-b-sm-inv u-marg-l-18of28 u-w-8of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.p1"))
                }
            }), a("div", {
                staticClass: "u-marg-l-1of28 u-w-15of28 u-bg-red u-pad-y-1 u-w-13of28@xl u-marg-l-0@sm u-w-100@sm u-marg-b-sm@sm"
            }, [a("h3", {
                staticClass: "t-h1 u-marg-l-5of15 u-marg-t-sm u-w-8of15 u-color-white u-marg-l-1of13@xl u-w-11of13@xl",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.t1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-t-sm u-marg-l-5of15 u-w-6of15 u-color-white-red u-marg-l-1of13@xl u-w-11of13@xl",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.p2"))
                }
            })]), a("div", {
                staticClass: "u-marg-l-18of28 u-marg-b-sm imt-container u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm u-marg-t-lg@sm"
            }, [a("h3", {
                staticClass: "t-h2 u-opacity-3 imt-text-1",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.t2"))
                }
            }), a("div", {
                ref: "imtBox",
                staticClass: "imt-box"
            }, [a("app-parallax", {
                staticClass: "absolute-box",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                attrs: {
                    src: n("3493")
                }
            })]), a("h3", {
                ref: "imtText",
                staticClass: "t-h2 imt-text-2",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.t2"))
                }
            })], 1)]), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-l-18of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.p3"))
                }
            }), a("div", {
                staticClass: "c-video-button u-w-10of28 u-marg-l-6of28 u-marg-l-3of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("button", {
                staticClass: "vb-height",
                on: {
                    click: function(t) {
                        e.openPopin(e.$t("project3.section4.youtube"))
                    }
                }
            }, [a("app-parallax", {
                staticClass: "relative-block",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "vb-embed",
                attrs: {
                    src: n("3852")
                }
            })]), a("div", {
                staticClass: "vb-play"
            }, [a("img", {
                attrs: {
                    width: "117",
                    height: "117",
                    src: n("3345"),
                    alt: "Play"
                }
            })])], 1)]), a("div", {
                staticClass: "double-bottom u-marg-b-lg u-marg-b-sm@sm"
            }, [a("p", {
                staticClass: "t-text-sm u-relative u-marg-t-lg u-marg-b-sm u-marg-l-6of28 u-w-6of28 u-color-grey-dark u-marg-l-3of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@md"
            }, [a("span", {
                staticClass: "o-cross--red"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project3.section4.p4"))
                }
            })]), a("div", {
                staticClass: "u-w-12of28 img-container u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("app-parallax", {
                staticClass: "absolute-box",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "img-embed",
                attrs: {
                    src: n("3a6f")
                }
            })])], 1)])])]), a("section", {
                ref: "section5",
                staticClass: "c-section c-section-5"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("div", {
                staticClass: "double-top u-marg-t-sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-b-sm u-color-red u-marg-l-2of28 u-w-13of28 u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section5.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-l-2of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project3.section5.p1"))
                }
            })], 1), a("div", {
                staticClass: "foot u-marg-l-2of28 u-marg-r-2of28"
            }, [a("button-project", {
                attrs: {
                    link: e.$t("project3.section5.link.url")
                }
            }, [e._v("\n                            " + e._s(e.$t("project3.section5.link.label")) + "\n                        ")])], 1)])]), a("app-section-footer", {
                ref: "section6",
                staticClass: "c-section c-section-6",
                attrs: {
                    project: 3
                },
                on: {
                    "to-project": e.backToTop
                }
            }), a("button-scroll-top", {
                staticClass: "c-button-scroll-top u-none@md",
                attrs: {
                    "is-visible": e.onBottomTop
                },
                on: {
                    click: function(t) {
                        e.backToTop()
                    }
                }
            }), a("app-section-nav", {
                on: {
                    "scroll-section": e.scrollToSection
                }
            })], 1)])], 1)
        }
          , yt = []
          , wt = function(e) {
            var t = .25 * e * 100 / 1080
              , n = .25 * e * 100 / 1080;
            return t.toFixed(2) + "vh) translateY(" + n.toFixed(2) + "vw"
        }
          , Ct = {
            mixins: [ft],
            methods: {
                initParallax: function() {
                    var e = this;
                    this.attachWillChange([3], ["imtBox", "imtText"]),
                    this.attachParallax([3], function(t, n, a, s) {
                        var i = 400 * (s - .5)
                          , r = wt(-i)
                          , o = wt(i);
                        e.$refs.imtBox.style.transform = "translateY(-50%) translateY(" + r + ")",
                        e.$refs.imtText.style.transform = "translateY(50%) translateY(" + o + ")"
                    })
                },
                videoPlayPause: function() {
                    var e = this.$refs.video;
                    this.videoIsPlaying ? (e.pause(),
                    this.videoIsPlaying = !1) : (e.play(),
                    this.videoIsPlaying = !0)
                }
            }
        }
          , Mt = Ct
          , _t = (n("f285"),
        Object(ge["a"])(Mt, xt, yt, !1, null, "148fd578", null))
          , Tt = _t.exports
          , St = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "c-project"
            }, [a("transition", {
                attrs: {
                    name: "project",
                    duration: {
                        enter: 2200,
                        leave: 2e3
                    }
                },
                on: {
                    "after-enter": function(t) {
                        e.updateSection()
                    }
                }
            }, [e.globalNav.isIntroElements ? a("section", {
                staticClass: "c-section c-section-intro"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "t-text-sm text",
                domProps: {
                    innerHTML: e._s(e.$t("project1.intro.text"))
                }
            }), a("button-explore", [e._v("\n                    " + e._s(e.$t("pages.footer.explore")) + "\n                ")])], 1)]) : a("div", [a("section", {
                ref: "section1",
                staticClass: "c-section c-section-1"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "t-h1 u-marg-l-6of28 u-w-9of28 u-marg-t-xs u-marg-b-lg u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-xl@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section1.t1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-w-6of28 u-marg-l-18of28 u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section1.p1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-b-xl u-marg-l-5of28 u-w-6of28 u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("span", {
                staticClass: "o-cross"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project1.section1.p2"))
                }
            })])])]), a("section", {
                ref: "section2",
                staticClass: "c-section c-section-2"
            }, [e.redBoxEnabled ? [a("div", {
                ref: "boxTopDisplay",
                staticClass: "c-box-top-display"
            }, [a("span", {
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.common.boxLabel"))
                }
            })]), a("div", {
                ref: "boxTopSelect",
                staticClass: "c-box-top-select"
            })] : e._e(), a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-absolute u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec2chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec2chap2",
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })])]), a("p", {
                staticClass: "t-text-md u-relative u-marg-l-18of28 u-w-8of28 u-marg-t-lg u-marg-b-md u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project1.section2.p1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-18of28 u-w-6of28 u-color-white-blue u-marg-b-md u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section2.p2"))
                }
            }), a("app-parallax", {
                staticClass: "u-relative u-marg-l-6of28 u-w-9of28 u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section2.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-18of28 u-marg-b-lg u-marg-t-lg u-w-6of28 u-color-white-blue u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm u-marg-b-sm@sm"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project1.section2.p3"))
                }
            })])], 1)], 2), a("section", {
                ref: "section3",
                staticClass: "c-section c-section-3"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec3chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec3chap2",
                staticClass: "text u-color-blue",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })])]), a("p", {
                staticClass: "t-text-md u-marg-b-xl u-marg-t-sm u-marg-l-18of28 u-w-8of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section3.p1"))
                }
            }), a("p", {
                staticClass: "t-text-md u-marg-b-lg u-marg-l-18of28 u-w-8of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section3.p2"))
                }
            })])]), a("section", {
                ref: "section4",
                staticClass: "c-section c-section-4"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("div", {
                staticClass: "double-top u-marg-t-md u-marg-b-md u-marg-b-sm@sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-l-6of28 u-w-9of28 u-color-grey-dark u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-marg-l-3of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.p1"))
                }
            })], 1), a("div", {
                staticClass: "u-marg-l-1of28 u-w-15of28 u-bg-red u-pad-y-1 u-w-13of28@xl u-marg-l-0@sm u-w-100@sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-l-5of15 u-marg-t-md u-w-8of15 u-color-white u-marg-l-1of13@xl u-w-11of13@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.t2"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-marg-t-xs u-marg-b-md u-marg-l-5of15 u-w-6of15 u-color-white u-marg-l-1of13@xl u-w-11of13@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.p2"))
                }
            })], 1), a("div", {
                staticClass: "u-marg-l-18of28 imt-container u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-lg@sm"
            }, [a("h3", {
                staticClass: "t-h2 u-opacity-3 imt-text-1",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.t3"))
                }
            }), a("div", {
                ref: "imtBox",
                staticClass: "imt-box"
            }, [a("img", {
                staticClass: "img-embed",
                attrs: {
                    src: n("aa66")
                }
            }), a("h3", {
                ref: "imtText",
                staticClass: "t-h2 text imt-text-2",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.t3"))
                }
            })])]), a("div", {
                staticClass: "double-middle u-marg-b-lg u-marg-b-sm@sm"
            }, [a("div", {
                staticClass: "c-video-button u-w-10of28 u-marg-l-6of28 u-marg-l-3of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("button", {
                staticClass: "vb-height",
                on: {
                    click: function(t) {
                        e.openPopin(e.$t("project1.section4.youtube"))
                    }
                }
            }, [a("img", {
                staticClass: "vb-embed",
                attrs: {
                    src: n("c081")
                }
            }), a("div", {
                staticClass: "vb-play"
            }, [a("img", {
                attrs: {
                    width: "117",
                    height: "117",
                    src: n("3345"),
                    alt: "Play"
                }
            })])])]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-2of28 u-w-6of28 u-color-grey-dark u-relative u-w-8of28@xl u-marg-l-3of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross--red"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project1.section4.p3"))
                }
            })])])])]), a("section", {
                ref: "section5",
                staticClass: "c-section c-section-5"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("div", {
                staticClass: "double-top u-marg-t-sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-b-sm u-color-red u-marg-l-2of28 u-w-13of28 u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section5.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-l-2of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project1.section5.p1"))
                }
            })], 1), a("div", {
                staticClass: "foot u-marg-l-2of28 u-marg-r-2of28"
            }, [a("button-project", {
                attrs: {
                    link: e.$t("project1.section5.link.url")
                }
            }, [e._v("\n                            " + e._s(e.$t("project1.section5.link.label")) + "\n                        ")])], 1)])]), a("app-section-footer", {
                ref: "section6",
                staticClass: "c-section c-section-6",
                attrs: {
                    project: 1
                },
                on: {
                    "to-project": e.backToTop
                }
            }), a("button-scroll-top", {
                staticClass: "c-button-scroll-top u-none@md",
                attrs: {
                    "is-visible": e.onBottomTop
                },
                on: {
                    click: function(t) {
                        e.backToTop()
                    }
                }
            }), a("app-section-nav", {
                on: {
                    "scroll-section": e.scrollToSection
                }
            })], 1)])], 1)
        }
          , Lt = []
          , Et = {
            mixins: [ft],
            methods: {
                initParallax: function() {
                    var e = this;
                    this.attachWillChange([3], ["imtBox", "imtText"]),
                    this.attachParallax([3], function(t, n, a, s) {
                        var i = 600 * (s - .5)
                          , r = wt(-i)
                          , o = wt(i);
                        e.$refs.imtBox.style.transform = "translateY(-50%) translateY(" + r + ")",
                        e.$refs.imtText.style.transform = "translateY(50%) translateY(" + o + ")"
                    })
                },
                videoPlayPause: function() {
                    var e = this.$refs.video;
                    this.videoIsPlaying ? (e.pause(),
                    this.videoIsPlaying = !1) : (e.play(),
                    this.videoIsPlaying = !0)
                }
            }
        }
          , Pt = Et
          , jt = (n("50c1"),
        Object(ge["a"])(Pt, St, Lt, !1, null, "eebab07e", null))
          , Ot = jt.exports
          , It = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "c-project"
            }, [a("transition", {
                attrs: {
                    name: "project",
                    duration: {
                        enter: 2200,
                        leave: 2e3
                    }
                },
                on: {
                    "after-enter": function(t) {
                        e.updateSection()
                    }
                }
            }, [e.globalNav.isIntroElements ? a("section", {
                staticClass: "c-section c-section-intro"
            }, [a("div", {
                staticClass: "container"
            }, [a("p", {
                staticClass: "t-text-sm text",
                domProps: {
                    innerHTML: e._s(e.$t("project4.intro.text"))
                }
            }), a("button-explore", [e._v("\n                    " + e._s(e.$t("pages.footer.explore")) + "\n                ")])], 1)]) : a("div", [a("section", {
                ref: "section1",
                staticClass: "c-section c-section-1"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "t-h1 u-marg-l-6of28 u-w-9of28 u-marg-t-xs u-marg-b-xl u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section1.t1"))
                }
            }), a("p", {
                staticClass: "t-text-md u-w-8of28 u-marg-l-18of28 u-marg-t-md u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section1.p1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-t-sm u-marg-l-18of28 u-w-6of28 u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section1.p2"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-t-md u-marg-b-xl u-marg-l-5of28 u-w-6of28 u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("span", {
                staticClass: "o-cross"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project4.section1.p3"))
                }
            })])])]), a("section", {
                ref: "section2",
                staticClass: "c-section c-section-2"
            }, [e.redBoxEnabled ? [a("div", {
                ref: "boxTopDisplay",
                staticClass: "c-box-top-display"
            }, [a("span", {
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.common.boxLabel"))
                }
            })]), a("div", {
                ref: "boxTopSelect",
                staticClass: "c-box-top-select"
            })] : e._e(), a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-absolute u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec2chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec2chap2",
                staticClass: "text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section2"))
                }
            })])]), a("p", {
                staticClass: "t-text-sm u-relative u-marg-l-18of28 u-w-6of28 u-marg-t-lg u-color-white-blue u-marg-b-md u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                staticClass: "t-text-substrong--white",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section2.p1"))
                }
            })]), a("div", {
                staticClass: "double-top u-relative u-marg-b-md"
            }, [a("app-parallax", {
                staticClass: "u-marg-l-6of28 u-w-9of28 u-marg-l-3of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section2.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm t-text-substrong--white u-marg-l-3of28 u-w-6of28 u-color-white-blue u-marg-b-md u-w-8of28@xl u-marg-l-2of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section2.p2"))
                }
            })], 1), a("p", {
                staticClass: "t-text-sm t-text-substrong--white u-relative u-marg-l-18of28 u-w-6of28 u-color-white-blue u-relative u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("span", {
                staticClass: "o-cross--white-blue"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project4.section2.p3"))
                }
            })]), a("p", {
                staticClass: "t-text-sm t-text-substrong--white u-relative u-marg-l-18of28 u-w-6of28 u-marg-t-sm u-marg-b-md u-color-white-blue u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section2.p4"))
                }
            })])], 2), a("section", {
                ref: "section3",
                staticClass: "c-section c-section-3"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("h2", {
                staticClass: "c-chapter-subtitle u-marg-l-6of28 t-text-xl u-marg-l-3of28@xl"
            }, [a("div", {
                staticClass: "box-top"
            }, [a("span", {
                ref: "sec3chap1",
                staticClass: "text u-color-red",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })]), a("div", {
                staticClass: "box-bottom"
            }, [a("span", {
                ref: "sec3chap2",
                staticClass: "text u-color-blue",
                domProps: {
                    innerHTML: e._s(e.$t("pages.chapter.section3"))
                }
            })])]), a("p", {
                staticClass: "t-text-md u-marg-b-sm u-marg-t-xxl u-marg-l-18of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section3.t1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-b-md u-marg-l-18of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section3.p"))
                }
            }), a("app-parallax", {
                staticClass: "u-marg-l-6of28 u-w-13of28 u-color-grey-dark u-marg-b-md u-marg-l-3of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section3.t2"))
                }
            })])], 1)]), a("section", {
                ref: "section4",
                staticClass: "c-section c-section-4"
            }, [a("div", {
                staticClass: "c-page-w u-relative"
            }, [a("div", {
                staticClass: "double-bottom"
            }, [a("div", {
                staticClass: "u-marg-l-6of28 u-w-6of28 u-marg-b-sm u-marg-l-3of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("p", {
                staticClass: "t-text-md u-marg-t-md u-marg-b-sm u-color-grey-dark",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section4.p1"))
                }
            }), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-t-xs u-color-grey-dark",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section4.p2"))
                }
            })]), a("div", {
                staticClass: "u-w-12of28 img-container-out u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("app-parallax", {
                staticClass: "absolute-box",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "img-embed",
                attrs: {
                    src: n("b98a")
                }
            })])], 1)]), a("div", {
                staticClass: "u-marg-l-1of28 u-w-15of28 u-bg-red u-pad-y-1 u-w-13of28@xl u-marg-l-0@sm u-w-100@sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-l-5of15 u-marg-t-md u-w-8of15 u-color-white u-marg-b-md u-marg-l-1of13@xl u-w-11of13@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section4.t1"))
                }
            })])], 1), a("div", {
                staticClass: "c-video-button u-w-10of28 u-marg-l-6of28 u-marg-l-4of28@xl u-w-11of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("button", {
                staticClass: "vb-height",
                on: {
                    click: function(t) {
                        e.openPopin(e.$t("project4.section4.youtube"))
                    }
                }
            }, [a("app-parallax", {
                staticClass: "relative-block",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "vb-embed",
                attrs: {
                    src: n("047f")
                }
            })]), a("div", {
                staticClass: "vb-play"
            }, [a("img", {
                attrs: {
                    width: "117",
                    height: "117",
                    src: n("3345"),
                    alt: "Play"
                }
            })])], 1)]), a("div", {
                staticClass: "video-right-text"
            }, [a("div", {
                staticClass: "video-right-text__content"
            }, [a("app-parallax", {
                staticClass: "u-marg-l-18of28 u-w-9of28 u-marg-b-sm u-color-grey-dark u-relative u-w-11of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@sm"
            }, [a("h3", {
                staticClass: "t-h1 u-relative"
            }, [a("span", {
                staticClass: "o-cross--red"
            }), a("span", {
                domProps: {
                    innerHTML: e._s(e.$t("project4.section4.t2"))
                }
            })])]), a("p", {
                staticClass: "t-text-sm u-marg-b-lg u-marg-l-18of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-16of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-b-sm@md",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section4.p3"))
                }
            })], 1)]), a("div", {
                staticClass: "double-bottom u-marg-b-lg u-marg-b-sm@sm"
            }, [a("p", {
                staticClass: "t-text-sm u-marg-t-lg u-marg-l-6of28 u-w-6of28 u-color-grey-dark u-marg-l-3of28@xl u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm u-marg-t-sm@sm u-marg-b-sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section4.p4"))
                }
            }), a("div", {
                staticClass: "u-w-12of28 img-container u-w-13of28@xl u-w-10of12@sm u-marg-l-1of12@sm"
            }, [a("app-parallax", {
                staticClass: "absolute-box",
                attrs: {
                    power: .125
                }
            }, [a("img", {
                staticClass: "img-embed",
                attrs: {
                    src: n("bb7b")
                }
            })])], 1)])])]), a("section", {
                ref: "section5",
                staticClass: "c-section c-section-5"
            }, [a("div", {
                staticClass: "c-page-w"
            }, [a("div", {
                staticClass: "double-top u-marg-t-sm"
            }, [a("app-parallax", {
                staticClass: "u-marg-b-sm u-color-red u-marg-l-2of28 u-w-13of28 u-marg-l-1of12@sm u-w-10of12@sm"
            }, [a("h3", {
                staticClass: "t-h1",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section5.t1"))
                }
            })]), a("p", {
                staticClass: "t-text-sm u-marg-b-sm u-marg-l-2of28 u-w-6of28 u-color-grey-dark u-w-8of28@xl u-marg-l-1of12@sm u-w-10of12@sm",
                domProps: {
                    innerHTML: e._s(e.$t("project4.section5.p1"))
                }
            })], 1), a("div", {
                staticClass: "foot u-marg-l-2of28 u-marg-r-2of28"
            }, [a("button-project", {
                attrs: {
                    link: e.$t("project4.section5.link.url")
                }
            }, [e._v("\n                            " + e._s(e.$t("project4.section5.link.label")) + "\n                        ")])], 1)])]), a("app-section-footer", {
                ref: "section6",
                staticClass: "c-section c-section-6",
                attrs: {
                    project: 0
                },
                on: {
                    "to-project": e.backToTop
                }
            }), a("button-scroll-top", {
                staticClass: "c-button-scroll-top u-none@md",
                attrs: {
                    "is-visible": e.onBottomTop
                },
                on: {
                    click: function(t) {
                        e.backToTop()
                    }
                }
            }), a("app-section-nav", {
                on: {
                    "scroll-section": e.scrollToSection
                }
            })], 1)])], 1)
        }
          , kt = []
          , Dt = {
            mixins: [ft],
            methods: {
                initParallax: function() {},
                videoPlayPause: function() {
                    var e = this.$refs.video;
                    this.videoIsPlaying ? (e.pause(),
                    this.videoIsPlaying = !1) : (e.play(),
                    this.videoIsPlaying = !0)
                }
            }
        }
          , zt = Dt
          , Rt = (n("7d85"),
        Object(ge["a"])(zt, It, kt, !1, null, "495c2890", null))
          , Nt = Rt.exports
          , Bt = ["en", "fr", "es"]
          , Ft = {
            LOAD_LOGS: !1,
            LIGHTS: !1,
            HIDE_WATER: !1,
            MULTI_MATERIAL: !1,
            WIREFRAME: !1,
            PRERENDER_DISABLED: !1,
            COLOR_GUI: !1
        }
          , Ut = function() {
            var e = (navigator.language || navigator.userLanguage).toLowerCase().substring(0, 2)
              , t = Bt.indexOf(e);
            return t > -1 ? Bt[t] : Bt[0]
        }
          , Gt = "/:lang(" + Bt.join("|") + ")"
          , Ht = [{
            name: "landing",
            path: "/",
            redirect: "/".concat(Ut(), "/").concat(r[Ut()].meta.url)
        }, {
            name: "home",
            path: Gt,
            redirect: {
                name: "project1"
            }
        }, {
            name: "project1",
            path: "".concat(Gt, "/:slug(").concat(r.en.meta.url, "|").concat(r.es.meta.url, "|").concat(r.fr.meta.url, ")"),
            component: Ot,
            meta: {
                project: 0,
                class: "ProjectMetro",
                type: "project",
                position: [1.30335, 103.832],
                i18n: {
                    en: r.en.meta.url,
                    fr: r.fr.meta.url,
                    es: r.es.meta.url
                }
            }
        }, {
            name: "project2",
            path: "".concat(Gt, "/:slug(").concat(o.en.meta.url, "|").concat(o.es.meta.url, "|").concat(o.fr.meta.url, ")"),
            component: bt,
            meta: {
                project: 1,
                class: "ProjectPort",
                type: "project",
                position: [36.8142871, -2.5619257],
                i18n: {
                    en: o.en.meta.url,
                    fr: o.fr.meta.url,
                    es: o.es.meta.url
                }
            }
        }, {
            name: "project3",
            path: "".concat(Gt, "/:slug(").concat(l.en.meta.url, "|").concat(l.es.meta.url, "|").concat(l.fr.meta.url, ")"),
            component: Tt,
            alias: ["/" + Gt + "/wanapum-dam-usa-fr", "/" + Gt + "/wanapum-dam-usa-es"],
            meta: {
                project: 2,
                class: "ProjectDam",
                type: "project",
                position: [46.8727994, -119.9715608],
                i18n: {
                    en: l.en.meta.url,
                    fr: l.fr.meta.url,
                    es: l.es.meta.url
                }
            }
        }, {
            name: "project4",
            path: "".concat(Gt, "/:slug(").concat(c.en.meta.url, "|").concat(c.es.meta.url, "|").concat(c.fr.meta.url, ")"),
            component: Nt,
            alias: ["/" + Gt + "/war-museum-poland-fr", "/" + Gt + "/war-museum-poland-es"],
            meta: {
                project: 3,
                class: "ProjectMuseum",
                type: "project",
                position: [54.35, 18.6667],
                i18n: {
                    en: c.en.meta.url,
                    fr: c.fr.meta.url,
                    es: c.es.meta.url
                }
            }
        }, {
            name: "404",
            path: "*",
            component: xe,
            meta: {
                title: "Soletanche Bachy - Page not found",
                description: ""
            }
        }]
          , Wt = new s["a"]({
            routes: Ht,
            mode: "history"
        });
        Wt.beforeEach(function(e, t, n) {
            if (e.params.lang || "404" === e.name)
                n();
            else {
                var a = {
                    name: e.name,
                    params: JSON.parse(pe()(e.params))
                };
                a.params.lang = Ut(),
                n(a)
            }
        });
        var Yt = {
            PIXEL_RATIO: Math.min(window.devicePixelRatio, 2),
            TEXTURE: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? .5 : 1
        }
          , qt = {
            RED_BLOCK: !1,
            FXAA_ENABLED: !1,
            WEBGL2_AA_SAMPLES: 4
        }
          , Zt = n("795b")
          , Xt = n.n(Zt)
          , Qt = function(e) {
            return new Xt.a(function(t) {
                e(),
                setTimeout(t, 30)
            }
            )
        }
          , Vt = function() {
            for (var e = arguments, t = null, n = function(n) {
                var a = n < 0 || e.length <= n ? void 0 : e[n];
                0 === n ? t = Qt(a) : t.then(function() {
                    return Qt(a)
                })
            }, a = 0; a < arguments.length; a++)
                n(a);
            t.catch(function(e) {
                return console.error(e)
            })
        }
          , Jt = function() {
            function e() {
                Object(v["a"])(this, e),
                this._initBindedVars(),
                this._initTimelines(),
                this._initVars(),
                this._initEvents()
            }
            return Object(b["a"])(e, [{
                key: "_initVars",
                value: function() {
                    this.sectionFade = 0,
                    this.startTime = g()(),
                    this.elementsLoadCount = 0,
                    this.elementsLoaded = 0,
                    Ft.LOAD_LOGS && (this.elementsList = []),
                    this.textures = [],
                    this.progress = {
                        current: 0,
                        count: 0
                    },
                    this.project = {
                        timeout: null
                    }
                }
            }, {
                key: "_initBindedVars",
                value: function() {
                    this.globalNav = {
                        projectCurrent: 0,
                        projectNext: 0,
                        sectionCurrent: 0,
                        sectionCurrentMiddle: 1,
                        sectionCurrentEnd: 0,
                        isIntro: !0,
                        isToRight: !0,
                        isIntroElements: !0,
                        isFadingProject: !1,
                        isFadingSection: !1,
                        modalVideo: !1,
                        isLoaded: !1,
                        loadMessage: "Start loading"
                    }
                }
            }, {
                key: "_initTimelines",
                value: function() {
                    this.timelines = {
                        yLimit: new ue([0, .25, .75, 1],[1, .7, .7, 1]),
                        xtRed: new ue([.1, .75, 1],[[-1.5, -.5], [.3, 1], [.6, 1]]),
                        xtBlue: new ue([0, .25, .7],[[-1, 0], [-.2, .8], [1.2, 2.2]]),
                        xb3DL: new ue([.5, .75, 1],[[-2, -.2], [0, .7], [0, 1]]),
                        xbBlue: new ue([.3, .75, 1],[[-1.3, -.3], [.7, 1.8], [1.5, 1.2]]),
                        xbRed: new ue([0, .25, .7],[[-.5, -.2], [-.8, .3], [1.3, 2.3]]),
                        xb3DR: new ue([0, .25, .5],[[0, 1], [.3, 1], [1.2, 2]])
                    }
                }
            }, {
                key: "_initEvents",
                value: function() {
                    var e = this;
                    this.onIntroReady = new me,
                    this.onAssetsLoaded = new me,
                    this.onGPULoaded = new me,
                    this.onDOMLoaded = new me,
                    this.onIntroEnded = new me,
                    this.onProgress = new me,
                    this.onDOMLoaded.addOnce(this._startIntro.bind(this)),
                    this.onIntroEnded.addOnce(function() {
                        e.globalNav.isLoaded = !0,
                        Vt(function() {
                            return 1
                        }, function() {
                            return 1
                        }, function() {
                            return e.onDOMLoaded.dispatch()
                        })
                    }),
                    this.onSectionFade = new me,
                    this.onProjectFade = new me,
                    this.onProjectChanged = new me,
                    this.onIntroFade = new me,
                    this.onBoxMove = new me,
                    this.onIntroExploreOver = new me,
                    this.onIntroExploreOut = new me,
                    this.onFrame = new me;
                    var t = function t(n) {
                        e.onFrame.dispatch(n),
                        window.requestAnimationFrame(t.bind(e))
                    };
                    t(window.performance.now()),
                    this.onFrame.add(this.tick.bind(this))
                }
            }, {
                key: "addToProgress",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.progress.count += e,
                    this.onProgress.dispatch(this.progress.current / this.progress.count)
                }
            }, {
                key: "removeToProgress",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.progress.current += e,
                    this.onProgress.dispatch(this.progress.current / this.progress.count)
                }
            }, {
                key: "_startIntro",
                value: function() {
                    var e = this;
                    this.tweenProjectFade && (this.tweenProjectFade.remove(),
                    delete this.tweenProjectFade),
                    this.tweenProjectFade = new de({
                        from: 1,
                        to: 0,
                        duration: 4e3,
                        easing: [0, .5, .5, 1]
                    }).onChange(function(t) {
                        e.onIntroFade.dispatch(t)
                    }).onEnd(function() {
                        e.onIntroFade.dispatch(0)
                    })
                }
            }, {
                key: "setSectionFade",
                value: function(e) {
                    e !== this.sectionFade && (this.sectionFade = e,
                    this.globalNav.isFadingSection = e > 0,
                    this.onSectionFade.dispatch(e))
                }
            }, {
                key: "_setProjectFade",
                value: function(e) {
                    e !== this.project.fade && (this.project.fade = e,
                    this.onProjectFade.dispatch(e))
                }
            }, {
                key: "getLoadTracker",
                value: function(e) {
                    var t = this;
                    return this.elementsLoadCount++,
                    Ft.LOAD_LOGS && this.elementsList.push(e),
                    function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , a = n.texture
                          , s = void 0 === a ? null : a;
                        if (s && t.textures.push(s),
                        t.elementsLoaded++,
                        t.globalNav.loadMessage = t.elementsLoaded + "/" + t.elementsLoadCount + ": " + e,
                        t.elementsLoaded >= t.elementsLoadCount ? t.onAssetsLoaded.dispatch() : t.onProgress.dispatch(t.elementsLoaded / t.elementsLoadCount),
                        Ft.LOAD_LOGS) {
                            var i, r = t.elementsList.indexOf(e);
                            t.elementsList.splice(r, 1),
                            (i = console).log.apply(i, ["LOAD:", t.elementsLoaded, t.elementsLoadCount].concat(Object(T["a"])(t.elementsList)))
                        }
                    }
                }
            }, {
                key: "tick",
                value: function() {
                    var e = this.globalNav.projectNext > this.globalNav.projectCurrent
                      , t = e ? 1 - this.project.fade : this.project.fade;
                    this.grid = {
                        fade: this.project.fade,
                        yLimit: this.timelines.yLimit.getValue(t),
                        xtBlue: this.timelines.xtBlue.getValue(t),
                        xtRed: this.timelines.xtRed.getValue(t),
                        xb3DR: this.timelines.xb3DR.getValue(t),
                        xbRed: this.timelines.xbRed.getValue(t),
                        xbBlue: this.timelines.xbBlue.getValue(t),
                        xb3DL: this.timelines.xb3DL.getValue(t)
                    }
                }
            }, {
                key: "getGrid",
                value: function() {
                    return this.grid
                }
            }, {
                key: "setProject",
                value: function(e) {
                    this.globalNav.projectNext = e,
                    this.globalNav.projectCurrent = e,
                    this.project.fade = 0,
                    this.globalNav.sectionCurrent = 0,
                    this.globalNav.sectionCurrentMiddle = 1,
                    this.globalNav.sectionCurrentEnd = 0,
                    this.setSectionFade(0),
                    this.globalNav.isIntro = !0,
                    this.globalNav.isToRight = !0,
                    this.globalNav.isIntroElements = !0,
                    this.onProjectChanged.dispatch()
                }
            }, {
                key: "fadeToTop",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                        return 1
                    }
                      , a = window.pageYOffset || document.documentElement.scrollTop
                      , s = 0
                      , i = 500
                      , r = Math.min(Math.max(a / e * 5, 1), 0);
                    new de({
                        from: a,
                        to: s,
                        duration: i,
                        easing: [.5, 0, 1, .5]
                    }).onChange(function(e) {
                        window.scrollTo ? window.scrollTo(0, e) : window.scrollTop = e
                    }).onEnd(function() {
                        var e = a > 0 ? 500 + 1500 * r : 1500
                          , s = a > 0 ? [0, .5, .5, 1] : [.5, 0, 0, 1];
                        t.fadeToIntro({
                            speed: r,
                            callback: n,
                            duration: e,
                            easing: s
                        })
                    })
                }
            }, {
                key: "setFadeProject",
                value: function(e) {
                    this.globalNav.isIntro = !0,
                    this.globalNav.isIntroElements = !0,
                    e >= 1 || e <= 0 ? (this.globalNav.isFadingProject = !(e >= 1),
                    this.onProjectChanged.dispatch(),
                    this._setProjectFade(0),
                    this.sectionFade = 0) : (this.globalNav.isFadingProject = !0,
                    this._setProjectFade(e),
                    this.sectionFade = e)
                }
            }, {
                key: "fadeToProject",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = n.force
                      , s = void 0 !== a && a
                      , i = n.duration
                      , r = void 0 === i ? 4e3 : i
                      , o = n.sectionFade
                      , l = void 0 === o ? 0 : o
                      , c = n.lastProject
                      , u = void 0 === c ? this.globalNav.projectCurrent : c;
                    if (e !== this.globalNav.projectNext || s) {
                        if (this.pendingFadeToProject && (this.onProjectChanged.remove(this.pendingFadeToProject),
                        delete this.pendingFadeToProject),
                        this.globalNav.isFadingProject) {
                            var d = function() {
                                return t.fadeToProject(e)
                            };
                            this.pendingFadeToProject = d,
                            this.onProjectChanged.addOnce(d)
                        }
                        this.globalNav.sectionCurrent = 0,
                        this.globalNav.sectionCurrentMiddle = 1,
                        this.globalNav.sectionCurrentEnd = 0,
                        this.sectionFade = l,
                        this.globalNav.isIntro = !0,
                        this.globalNav.isIntroElements = !0,
                        this.globalNav.isFadingProject = !0,
                        (e !== u || s) && (this.globalNav.projectCurrent = u,
                        this.globalNav.projectNext = e,
                        this.globalNav.isToRight = e > u,
                        this.tweenProjectFade && (this.tweenProjectFade.remove(),
                        delete this.tweenProjectFade),
                        this.tweenProjectFade = new de({
                            from: this.sectionFade,
                            to: 1,
                            duration: r,
                            easing: [.5, 0, .5, 1]
                        }).onChange(this._setProjectFade.bind(this)).onEnd(function() {
                            t.globalNav.projectCurrent = e,
                            t.globalNav.isFadingProject = !1,
                            t._setProjectFade(0),
                            t.onProjectChanged.dispatch()
                        }))
                    }
                }
            }, {
                key: "fadeToIntro",
                value: function(e) {
                    var t = this
                      , n = e.speed
                      , a = void 0 === n ? 1 : n
                      , s = e.callback
                      , i = void 0 === s ? function() {
                        return 1
                    }
                    : s
                      , r = e.duration
                      , o = void 0 === r ? 500 + 1500 * a : r
                      , l = e.easing
                      , c = void 0 === l ? [0, .5, .5, 1] : l;
                    this.globalNav.sectionCurrent = 0,
                    this.globalNav.sectionCurrentMiddle = 1,
                    this.globalNav.sectionCurrentEnd = 0,
                    this.globalNav.isIntro = !0,
                    this.globalNav.isIntroElements = !0,
                    this.tweenSectionFade && (this.tweenSectionFade.remove(),
                    delete this.tweenSectionFade),
                    this.setSectionFade(.999),
                    requestAnimationFrame(function() {
                        t.tweenSectionFade = new de({
                            from: 1,
                            to: 0,
                            duration: o,
                            easing: c
                        }).onChange(t.setSectionFade.bind(t)).onEnd(i)
                    })
                }
            }, {
                key: "fadeToContent",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.globalNav.isIntroElements = !1,
                    document.documentElement.classList.remove("is-scroll-disabled"),
                    document.documentElement.classList.add("is-scroll-disabled"),
                    this.tweenSectionFade && (this.tweenSectionFade.remove(),
                    delete this.tweenSectionFade),
                    this.tweenSectionFade = new de({
                        from: 0,
                        to: 1,
                        duration: 2e3,
                        easing: [.5, 0, .5, 1]
                    }).onChange(this.setSectionFade.bind(this)).onEnd(function() {
                        document.documentElement.classList.remove("is-scroll-disabled"),
                        e.globalNav.isIntro = !1
                    }),
                    t && (this.onIntroExploreOutTimeout && clearTimeout(this.onIntroExploreOutTimeout),
                    this.onIntroExploreOutTimeout = setTimeout(function() {
                        return e.onIntroExploreOut.dispatch()
                    }, 1e3))
                }
            }]),
            e
        }()
          , Kt = new Jt
          , $t = Kt
          , en = n("9a04")
          , tn = (n("34ef"),
        n("d5e8"))
          , nn = n.n(tn)
          , an = n("4bf7")
          , sn = n.n(an)
          , rn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, S["Vb"].envmap, S["Vb"].aomap, S["Vb"].lightmap, S["Vb"].emissivemap, S["Vb"].bumpmap, S["Vb"].normalmap, S["Vb"].displacementmap, S["Vb"].roughnessmap, S["Vb"].metalnessmap, S["Vb"].fog, S["Vb"].lights, {
                diffuse: {
                    value: new S["o"](16777215)
                },
                emissive: {
                    value: new S["o"](0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                }
            }, e])
        }
          , on = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(v["a"])(this, e);
            var n = new S["Jb"]({
                name: "WaterMaterial",
                vertexShader: nn.a,
                fragmentShader: sn.a,
                uniforms: rn(t.uniforms),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()({
                    STANDARD: ""
                }, t.defines ? t.defines : {}),
                lights: !0,
                transparent: !0
            });
            return n
        }
          , ln = n("f266")
          , cn = n.n(ln)
          , un = n("fdba")
          , dn = n.n(un)
          , mn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, S["Vb"].envmap, S["Vb"].aomap, S["Vb"].lightmap, S["Vb"].emissivemap, S["Vb"].bumpmap, S["Vb"].normalmap, S["Vb"].displacementmap, S["Vb"].roughnessmap, S["Vb"].metalnessmap, S["Vb"].fog, S["Vb"].lights, {
                diffuse: {
                    value: new S["o"](16777215)
                },
                emissive: {
                    value: new S["o"](0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                }
            }, e])
        }
          , hn = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(v["a"])(this, e);
            var n = {
                STANDARD: "",
                USE_MAP: ""
            };
            return t.uniforms.normalMap && (n.USE_NORMALMAP = t.uniforms.normalMap),
            new S["Jb"]({
                name: "GroundWaterMaterial",
                vertexShader: cn.a,
                fragmentShader: dn.a,
                uniforms: mn(t.uniforms),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()(n, t.defines ? t.defines : {}),
                lights: !0
            })
        }
          , pn = n("55cb")
          , fn = n.n(pn)
          , An = n("c89e")
          , gn = n.n(An)
          , vn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, S["Vb"].envmap, S["Vb"].aomap, S["Vb"].lightmap, S["Vb"].emissivemap, S["Vb"].bumpmap, S["Vb"].normalmap, S["Vb"].displacementmap, S["Vb"].roughnessmap, S["Vb"].metalnessmap, S["Vb"].fog, S["Vb"].lights, {
                diffuse: {
                    value: new S["o"](16777215)
                },
                emissive: {
                    value: new S["o"](0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                }
            }, e])
        }
          , bn = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(v["a"])(this, e);
            var n = {
                STANDARD: "",
                USE_MAP: ""
            };
            return t.uniforms.normalMap && (n.USE_NORMALMAP = t.uniforms.normalMap),
            new S["Jb"]({
                name: "GroundMaterial",
                vertexShader: fn.a,
                fragmentShader: gn.a,
                uniforms: vn(t.uniforms),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()(n, t.defines ? t.defines : {}),
                lights: !0
            })
        }
          , xn = (n("1618"),
        n("6b6c"),
        n("23e0"))
          , yn = n.n(xn)
          , wn = n("8027")
          , Cn = n.n(wn)
          , Mn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, S["Vb"].envmap, S["Vb"].aomap, S["Vb"].lightmap, S["Vb"].emissivemap, S["Vb"].bumpmap, S["Vb"].normalmap, S["Vb"].displacementmap, S["Vb"].roughnessmap, S["Vb"].metalnessmap, S["Vb"].fog, S["Vb"].lights, {
                diffuse: {
                    value: new S["o"](16777215)
                },
                emissive: {
                    value: new S["o"](0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: .5
                },
                envMapIntensity: {
                    value: 1
                },
                time: {
                    value: 0
                },
                cloudDirection: {
                    type: "v2",
                    value: new S["Xb"](0,0)
                },
                cloudScale: {
                    type: "v2",
                    value: new S["Xb"](.1,.1)
                }
            }, e])
        }
          , _n = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(v["a"])(this, e);
            var n = {};
            return new S["Jb"]({
                name: "CloudMaterial",
                vertexShader: yn.a,
                fragmentShader: Cn.a,
                uniforms: Mn(t.uniforms),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()(n, t.defines ? t.defines : {}),
                lights: !0,
                transparent: !0,
                depthWrite: !1,
                depthTest: !1
            })
        }
          , Tn = n("a291")
          , Sn = n.n(Tn)
          , Ln = n("f81e")
          , En = n.n(Ln)
          , Pn = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return Object(v["a"])(this, e),
            new S["Jb"]({
                vertexShader: Sn.a,
                fragmentShader: En.a,
                uniforms: D()({
                    time: {
                        type: "f",
                        value: 0
                    },
                    uDisplace: {
                        type: "f",
                        value: -.002
                    },
                    uZDeform: {
                        type: "v2",
                        value: new S["Xb"](1,2)
                    }
                }, t.uniforms || {}),
                lights: !1
            })
        }
          , jn = n("771f")
          , On = n.n(jn)
          , In = n("da5d")
          , kn = n.n(In)
          , Dn = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, {
                centerColor: {
                    type: "v4",
                    value: new S["o"](0)
                },
                cornersColor: {
                    type: "v4",
                    value: new S["o"](0)
                },
                centerOpacity: {
                    type: "f",
                    value: 0
                },
                cornersOpacity: {
                    type: "f",
                    value: .4
                }
            }, e])
        }
          , zn = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            Object(v["a"])(this, e);
            var n = new S["Jb"]({
                name: "VignettingMaterial",
                vertexShader: On.a,
                fragmentShader: kn.a,
                uniforms: Dn(t.uniforms),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()({}, t.defines ? t.defines : {}),
                lights: !1
            });
            return n.transparent = !0,
            n.depthTest = !1,
            n.depthWrite = !1,
            n
        }
          , Rn = n("52aa")
          , Nn = n.n(Rn)
          , Bn = n("9a9b")
          , Fn = n.n(Bn)
          , Un = n("9b34")
          , Gn = n.n(Un)
          , Hn = n("5158")
          , Wn = n.n(Hn)
          , Yn = n("b5fb")
          , qn = n.n(Yn)
          , Zn = n("2753")
          , Xn = n.n(Zn)
          , Qn = n("d3f44")
          , Vn = n.n(Qn)
          , Jn = n("83ae")
          , Kn = n.n(Jn)
          , $n = n("fb79")
          , ea = n.n($n)
          , ta = n("7045")
          , na = n.n(ta)
          , aa = n("3c24")
          , sa = n.n(aa)
          , ia = n("a99d")
          , ra = n.n(ia)
          , oa = n("8bd4")
          , la = n.n(oa)
          , ca = [Kn.a, ea.a, na.a].map(function(e) {
            var t = $t.getLoadTracker(e)
              , n = (new S["Sb"]).load(e, function() {
                return t({
                    texture: n
                })
            });
            return n.wrapS = S["Fb"],
            n.wrapT = S["Fb"],
            n
        })
          , ua = ([sa.a, ra.a, la.a].map(function(e) {
            var t = $t.getLoadTracker(e)
              , n = (new S["Sb"]).load(e, function() {
                return t({
                    texture: n
                })
            });
            return n.wrapS = S["Fb"],
            n.wrapT = S["Fb"],
            n
        }),
        function(e) {
            var t = $t.getLoadTracker(e)
              , n = (new S["Sb"]).load(e, function() {
                return t({
                    texture: n
                })
            });
            return n.wrapS = S["Fb"],
            n.wrapT = S["Fb"],
            n
        }
        )
          , da = ua(Vn.a)
          , ma = ua(Fn.a)
          , ha = ua(Nn.a)
          , pa = ua(Xn.a)
          , fa = ua(Gn.a)
          , Aa = (ua(Wn.a),
        ua(qn.a))
          , ga = function(e, t, n) {
            return e + n * (t - e)
        }
          , va = function(e, t, n) {
            for (var a = e * t, s = new Uint8Array(3 * a), i = (16711680 & n) >> 16, r = (65280 & n) >> 8, o = (255 & n) >> 0, l = 0; l < a; l++) {
                var c = 3 * l;
                s[c] = i,
                s[c + 1] = r,
                s[c + 2] = o
            }
            var u = new S["r"](s,e,t,S["Eb"]);
            return u.needsUpdate = !0,
            u
        }
          , ba = {}
          , xa = va(2, 2, 0)
          , ya = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.displacementScale
              , n = void 0 === t ? -.05 : t
              , a = e.displacementBias
              , s = void 0 === a ? -.001 : a;
            if (!Ft.MULTI_MATERIAL && ba["blueprintMaskMaterial" + String(n)])
                return ba["blueprintMaskMaterial" + String(n)];
            var i = new S["eb"]({
                emissive: new S["o"](R.BLUEPRINT.BACKGROUND),
                roughness: 0,
                metalness: 1,
                normalScale: new S["Xb"](1,-1),
                displacementMap: xa,
                displacementScale: n,
                displacementBias: s
            });
            return ba["blueprintMaskMaterial" + String(n)] = i,
            i
        }
          , wa = function() {
            if (!Ft.MULTI_MATERIAL && ba.shadowMaterial)
                return ba.shadowMaterial;
            var e = new S["db"]({
                map: da,
                transparent: !0
            });
            return e.opacity = .5,
            ba.shadowMaterial = e,
            e
        }
          , Ca = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!Ft.MULTI_MATERIAL && ba.groundMaterial && !e)
                return ba.groundMaterial;
            var t = new bn({
                uniforms: {
                    diffuse: {
                        value: new S["o"](R.MODEL.GROUND)
                    },
                    diffuseDark: {
                        value: new S["o"](R.MODEL.GROUND_DARK)
                    },
                    diffuseSlider: {
                        value: 0
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    map: {
                        type: "t",
                        value: null
                    },
                    normalMap: {
                        type: "t",
                        value: null
                    },
                    cityColor: {
                        value: new S["o"](R.FOG.COLOR)
                    },
                    cityHeight: {
                        value: .25
                    },
                    cityY: {
                        value: .75
                    },
                    cityAlpha: {
                        value: R.FOG.OPACITY
                    }
                }
            });
            return t.uniforms.map.value = fa,
            t.uniforms.normalMap.value = Aa,
            e || (ba.groundMaterial = t),
            t
        }
          , Ma = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!Ft.MULTI_MATERIAL && !e && ba.groundWaterMaterial)
                return ba.groundWaterMaterial;
            var t = new hn({
                uniforms: {
                    diffuse: {
                        value: new S["o"](R.MODEL.GROUND)
                    },
                    diffuseDark: {
                        value: new S["o"](R.MODEL.GROUND_DARK)
                    },
                    diffuseSlider: {
                        value: 0
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    map: {
                        type: "t",
                        value: null
                    },
                    normalMap: {
                        type: "t",
                        value: null
                    },
                    time: {
                        value: 0
                    },
                    wavePower: {
                        value: .002
                    },
                    waveVelocity: {
                        value: 7.165
                    },
                    waterColor: {
                        value: new S["o"](10607569)
                    },
                    waterHeight: {
                        value: 5.1
                    },
                    waterY: {
                        value: -.15
                    },
                    waterOpacity: {
                        value: .5
                    },
                    causticSize: {
                        value: 2.8
                    },
                    cityColor: {
                        value: new S["o"](R.FOG.COLOR)
                    },
                    cityHeight: {
                        value: 7.7
                    },
                    cityY: {
                        value: 1.02
                    },
                    cityAlpha: {
                        value: R.FOG.OPACITY
                    }
                }
            });
            return t.uniforms.map.value = fa,
            t.uniforms.normalMap.value = Aa,
            e || (ba.groundWaterMaterial = t),
            t
        }
          , _a = function() {
            if (!Ft.MULTI_MATERIAL && ba.cubeDefaultMaterial)
                return ba.cubeDefaultMaterial;
            var e = Ma(!0);
            return e.uniforms.diffuse.value = new S["o"](R.MODEL.CUBE),
            ba.cubeDefaultMaterial = e,
            e
        }
          , Ta = function() {
            if (!Ft.MULTI_MATERIAL && ba.cubeGroundMaterial)
                return ba.cubeGroundMaterial;
            var e = Ca(!0);
            return e.uniforms.diffuse.value = new S["o"](R.MODEL.CUBE),
            ba.cubeGroundMaterial = e,
            e
        }
          , Sa = function() {
            var e = new Pn({
                uniforms: {}
            });
            return e
        }
          , La = function(e) {
            if (!Ft.MULTI_MATERIAL && ba["vignettingMaterial" + e])
                return ba["vignettingMaterial" + e];
            var t = new zn
              , n = function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = a.centerColor
                  , i = void 0 === s ? 0 : s
                  , r = a.cornersColor
                  , o = void 0 === r ? 0 : r
                  , l = a.centerOpacity
                  , c = void 0 === l ? 1 : l
                  , u = a.cornersOpacity
                  , d = void 0 === u ? 1 : u;
                t.uniforms.centerColor.value.set(R.VIGNETTING[e].CENTER_COLOR).lerp(new S["o"](i), n),
                t.uniforms.cornersColor.value.set(R.VIGNETTING[e].CORNERS_COLOR).lerp(new S["o"](o), n),
                t.uniforms.centerOpacity.value = ga(R.VIGNETTING[e].CENTER_OPACITY, c, n),
                t.uniforms.cornersOpacity.value = ga(R.VIGNETTING[e].CORNERS_OPACITY, d, n)
            };
            return n(0),
            ba["vignettingMaterial" + e] = {
                material: t,
                controller: n
            },
            {
                material: t,
                controller: n
            }
        }
          , Ea = function() {
            if (!Ft.MULTI_MATERIAL && ba.wireframeXrayMaterial)
                return ba.wireframeXrayMaterial;
            var e = new S["Q"]({
                color: 16777215,
                linewidth: 1,
                opacity: .5,
                transparent: !0
            });
            return ba.wireframeXrayMaterial = e,
            e
        }
          , Pa = function() {
            if (!Ft.MULTI_MATERIAL && ba.wireframeMaterial)
                return ba.wireframeMaterial;
            var e = new S["Q"]({
                color: R.BLUEPRINT.LINE,
                opacity: R.BLUEPRINT.LINE_OPACITY,
                transparent: !0,
                linewidth: 1
            });
            return e.transparence = !0,
            ba.wireframeMaterial = e,
            e
        }
          , ja = function() {
            if (!Ft.MULTI_MATERIAL && ba.wireframeTransitionMaterial)
                return ba.wireframeTransitionMaterial;
            var e = new S["Q"]({
                color: R.MODEL.WIREFRAME_TRANSITION_COLOR,
                opacity: R.MODEL.WIREFRAME_TRANSITION_OPACITY,
                transparent: !0,
                linewidth: 1
            });
            return e.opacity = 0,
            e.transparence = !0,
            ba.wireframeTransitionMaterial = e,
            e
        }
          , Oa = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [1, 1]
              , n = new _n({
                uniforms: {
                    diffuse: {
                        value: new S["o"](16777215)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    map: {
                        type: "t",
                        value: null
                    },
                    cloudDirection: {
                        type: "v2",
                        value: Object(en["a"])(S["Xb"], Object(T["a"])(t))
                    },
                    time: {
                        value: 0
                    }
                }
            });
            return n.uniforms.map.value = ca[e % 3],
            n
        }
          , Ia = function() {
            if (!Ft.MULTI_MATERIAL && ba.redMaterial)
                return ba.redMaterial;
            var e = Ca(!0);
            return e.uniforms.diffuse.value = new S["o"](R.MODEL.RED),
            ba.redMaterial = e,
            e
        }
          , ka = function() {
            if (!Ft.MULTI_MATERIAL && ba.greyMaterial)
                return ba.greyMaterial;
            var e = Ca(!0);
            return e.uniforms.diffuse.value = new S["o"](R.MODEL.GREY),
            ba.greyMaterial = e,
            e
        }
          , Da = function() {
            if (!Ft.MULTI_MATERIAL && ba.blueMaterial)
                return ba.blueMaterial;
            var e = Ca(!0);
            return e.uniforms.diffuse.value = new S["o"](R.MODEL.BLUE),
            ba.blueMaterial = e,
            e
        }
          , za = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!Ft.MULTI_MATERIAL && ba["waterMaterial" + (e ? "a" : "b")])
                return ba["waterMaterial" + (e ? "a" : "b")];
            if (Ft.HIDE_WATER)
                return new S["db"]({
                    transparent: !0,
                    opacity: 0
                });
            var t = new S["o"](10607569)
              , n = .0125
              , a = 7.165
              , s = [54.165, 69.654]
              , i = new on({
                uniforms: {
                    emissive: {
                        value: new S["o"](0)
                    },
                    diffuse: {
                        value: t
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    },
                    causticOpacity: {
                        value: .35
                    },
                    time: {
                        value: 0
                    },
                    wavePower: {
                        value: n
                    },
                    waveVelocity: {
                        value: a
                    },
                    waveDistance: {
                        value: Object(en["a"])(S["Xb"], s)
                    },
                    waveMap: {
                        type: "t",
                        value: null
                    },
                    waterCausticMap: {
                        type: "t",
                        value: null
                    },
                    gradient: {
                        type: "t",
                        value: null
                    },
                    noGradient: {
                        value: e ? 1 : 0
                    }
                }
            });
            return i.uniforms.waveMap.value = ha,
            i.uniforms.gradient.value = pa,
            i.uniforms.waterCausticMap.value = ma,
            ba["waterMaterial" + (e ? "a" : "b")] = i,
            i
        }
          , Ra = new S["wb"](1,1)
          , Na = new S["y"](new S["h"](1,1,1))
          , Ba = new S["Q"]({
            color: R.MODEL.WIREFRAME_CUBE_COLOR,
            linewidth: 1
        });
        Ba.opacity = R.MODEL.WIREFRAME_CUBE_OPACITY,
        Ba.transparent = !0;
        var Fa = function(e) {
            return new S["cb"](Ra,e)
        }
          , Ua = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = new S["E"]
              , a = new S["cb"](n,e)
              , s = D()({
                castShadow: !0,
                receiveShadow: !0,
                matrixAutoUpdate: !1,
                needsUpdate: !0
            }, t);
            for (var i in s)
                a[i] = s[i];
            return a.updateMatrix(),
            a
        }
          , Ga = function() {
            var e = new S["S"](Na,Ba);
            return e
        }
          , Ha = {}
          , Wa = Ha
          , Ya = n("768b")
          , qa = (n("55dd"),
        n("b05c"),
        function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
                Object(v["a"])(this, e),
                this.perm = new Int8Array(257);
                for (var n = 0; n < 256; n++)
                    this.perm[n] = 1 & n ? 1 : -1;
                for (var a = 0; a < 256; a++) {
                    var s = 4294967296 * t() & 255
                      , i = [this.perm[s], this.perm[a]];
                    this.perm[a] = i[0],
                    this.perm[s] = i[1]
                }
                this.perm[256] = this.perm[0]
            }
            return Object(b["a"])(e, [{
                key: "noise1d",
                value: function(e) {
                    var t = 0 | e
                      , n = e - t
                      , a = 255 & t
                      , s = (3 - 2 * n) * n * n
                      , i = n * this.perm[a]
                      , r = (n - 1) * this.perm[a + 1];
                    return i + s * (r - i)
                }
            }, {
                key: "noise",
                value: function(e) {
                    var t = 0;
                    return t += .25 * (1 + this.noise1d(e)),
                    t += .125 * (1 + this.noise1d(2 * e)),
                    t += .0625 * (1 + this.noise1d(4 * e)),
                    t += .03125 * (1 + this.noise1d(8 * e)),
                    t
                }
            }]),
            e
        }())
          , Za = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = n.amplitude
                  , s = void 0 === a ? 1 : a
                  , i = n.velocity
                  , r = void 0 === i ? 1 : i;
                Object(v["a"])(this, e),
                this.mesh = t,
                this.amplitude = s,
                this.velocity = r,
                this.noiseX = new qa,
                this.noiseY = new qa,
                this.noiseZ = new qa
            }
            return Object(b["a"])(e, [{
                key: "tick",
                value: function(e) {
                    var t = .001 * e * this.velocity
                      , n = this.amplitude * this.noiseX.noise(t)
                      , a = this.amplitude * this.noiseY.noise(t)
                      , s = this.amplitude * this.noiseZ.noise(t);
                    this.mesh.position.set(n, a, s)
                }
            }]),
            e
        }()
          , Xa = function() {
            function e(t) {
                var n = t.preventDefault
                  , a = void 0 !== n && n
                  , s = t.initPosition
                  , i = void 0 === s ? [0, 0] : s
                  , r = t.onMove
                  , o = void 0 === r ? null : r;
                Object(v["a"])(this, e),
                this.preventDefault = a,
                this.position = i,
                this._hasMoved = !1,
                this.onMove = o,
                this._onMouseMove = this._onMouseMove.bind(this),
                this._onRaf = this._onRaf.bind(this),
                document.addEventListener("mousemove", this._onMouseMove, !1),
                this._raf = requestAnimationFrame(this._onRaf)
            }
            return Object(b["a"])(e, [{
                key: "dispose",
                value: function() {
                    document.removeEventListener("mousemove", this._onMouseMove)
                }
            }, {
                key: "_onRaf",
                value: function() {
                    this._hasMoved && this.onMove && (this.onMove.apply(this, Object(T["a"])(this.position)),
                    this._hasMoved = !1)
                }
            }, {
                key: "_onMouseMove",
                value: function(e) {
                    this.position = [e.x, e.y],
                    this._hasMoved = !0
                }
            }]),
            e
        }()
          , Qa = Xa
          , Va = function() {
            function e(t) {
                var n = t.clamp
                  , a = void 0 === n ? [90, 90, 90] : n
                  , s = t.onOrientationChange
                  , i = void 0 === s ? function() {
                    return 0
                }
                : s;
                Object(v["a"])(this, e),
                this.clamp = a,
                this.onOrientationChange = i,
                this._onOrientationChange = this._onOrientationChange.bind(this),
                this.data = [0, 0, 0],
                this.isEnable = !0,
                window.addEventListener("deviceorientation", this._onOrientationChange, !1)
            }
            return Object(b["a"])(e, [{
                key: "enable",
                value: function() {
                    this.isEnable = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnable = !1
                }
            }, {
                key: "reset",
                value: function() {
                    this.relative = void 0
                }
            }, {
                key: "dispose",
                value: function() {
                    window.removeEventListener("deviceorientation", this._onOrientationChange)
                }
            }, {
                key: "_onOrientationChange",
                value: function(e) {
                    var t = this;
                    if (this.isEnable) {
                        var n = [0, 0, 0]
                          , a = window.orientation;
                        switch (this.winOrientation !== a && (this.winOrientation = a,
                        this.reset()),
                        a) {
                        case 90:
                            n[0] = Math.round(e.gamma),
                            n[1] = Math.round(-e.alpha),
                            n[2] = Math.round(e.beta);
                            break;
                        case -90:
                            n[0] = Math.round(-e.gamma),
                            n[1] = Math.round(-e.alpha),
                            n[2] = Math.round(-e.beta);
                            break;
                        default:
                        case 0:
                            n[0] = Math.round(-e.beta),
                            n[1] = Math.round(-e.gamma),
                            n[2] = Math.round(-e.alpha);
                            break
                        }
                        this.relative || (this._initOrientation = n);
                        var s = n.map(function(e, n) {
                            return e - t._initOrientation[n]
                        });
                        this.absolute = n,
                        this.relative = s,
                        this.data = s.map(function(e, n) {
                            return Math.max(-.5, Math.min(.5, e / t.clamp[n]))
                        }),
                        this.onOrientationChange && this.onOrientationChange(this.data)
                    }
                }
            }]),
            e
        }()
          , Ja = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , a = n.velocity
                  , s = void 0 === a ? 1 : a
                  , i = n.width
                  , r = void 0 === i ? 1280 : i
                  , o = n.height
                  , l = void 0 === o ? 720 : o;
                Object(v["a"])(this, e),
                this.mesh = t,
                this.velocity = s,
                this.time = window.performance.now(),
                this.position = [.5, .5],
                this.cursor = new Qa({
                    initPosition: [r / 2, l / 2]
                }),
                ("ontouchstart"in window || navigator.msMaxTouchPoints > 0) && (this.orientation = new Va({
                    clamp: [45, 45, 45]
                }))
            }
            return Object(b["a"])(e, [{
                key: "resize",
                value: function(e, t) {
                    this.width = e,
                    this.height = t
                }
            }, {
                key: "dispose",
                value: function() {
                    this.cursor.dispose(),
                    this.orientation && this.orientation.dispose()
                }
            }, {
                key: "getLook",
                value: function() {
                    if (this.orientation) {
                        var e = Object(Ya["a"])(this.orientation.data, 2)
                          , t = e[0]
                          , n = e[1];
                        return [n, t]
                    }
                    var a = this.cursor.position;
                    return [a[0] / this.width - .5, a[1] / this.height - .5]
                }
            }, {
                key: "tick",
                value: function(e) {
                    var t = Math.min((e - this.time) / 1e3, 2 / 60)
                      , n = this.getLook()
                      , a = Object(Ya["a"])(n, 2)
                      , s = a[0]
                      , i = a[1];
                    this.time = e,
                    this.position[0] += (-i - this.position[0]) * t * this.velocity,
                    this.position[1] += (-s - this.position[1]) * t * this.velocity
                }
            }, {
                key: "getPosition",
                value: function(e) {
                    return e !== this.time && this.tick(e),
                    this.position
                }
            }]),
            e
        }()
          , Ka = new S["Yb"]
          , $a = new S["Yb"]
          , es = new S["Bb"]
          , ts = function() {
            function e(t, n, a) {
                Object(v["a"])(this, e),
                this.init(t, n, a)
            }
            return Object(b["a"])(e, [{
                key: "setLayers",
                value: function(e) {
                    this.main.layers.set(e)
                }
            }, {
                key: "addCameras",
                value: function(e, t, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if (e && e.length > 0) {
                        var s;
                        for (var i in (s = this.list).push.apply(s, Object(T["a"])(e)),
                        this.list.forEach(function(e) {
                            e.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                            e.aspect = t / n,
                            e.updateProjectionMatrix()
                        }),
                        this.list.sort(function(e, t) {
                            return e.name > t.name ? 1 : -1
                        }),
                        this.main.copy(this.list[0]),
                        this.main.position.set(0, 0, 0),
                        this.main.rotation.set(0, 0, 0),
                        a)
                            this.main[i] = a[i];
                        this.main.updateProjectionMatrix()
                    }
                }
            }, {
                key: "setTargets",
                value: function(e) {
                    this.targets = e
                }
            }, {
                key: "moveAway",
                value: function(e) {
                    this.list[0].position.multiplyScalar(e),
                    this.main.far *= e,
                    this.main.updateProjectionMatrix()
                }
            }, {
                key: "drag",
                value: function(e, t) {
                    this.dragData.x -= this.dragData.power * e / 360,
                    this.dragData.y -= this.dragData.power * t / 360;
                    while (this.dragData.x < Math.PI)
                        this.dragData.x += 2 * Math.PI;
                    while (this.dragData.x > Math.PI)
                        this.dragData.x -= 2 * Math.PI;
                    this.dragData.y = Math.max(Math.min(this.dragData.y, .2), -.43)
                }
            }, {
                key: "dragPower",
                value: function(e) {
                    0 === e && (this.dragData.x = 0,
                    this.dragData.y = 0),
                    this.dragData.power = e
                }
            }, {
                key: "init",
                value: function(e, t, n) {
                    this.name = n,
                    this.main = new S["ub"](75,e / t,1,1e4),
                    this.list = [],
                    this.dragGround = new S["G"],
                    this.containerGroup = new S["G"],
                    this.helicopterGroup = new S["G"],
                    this.controlGroup = new S["G"],
                    this.dragGround.add(this.containerGroup),
                    this.containerGroup.add(this.helicopterGroup),
                    this.helicopterGroup.add(this.controlGroup),
                    this.controlGroup.add(this.main),
                    this.dragData = {
                        x: 0,
                        y: 0,
                        power: 0
                    },
                    this.controls = new Ja(this.controlGroup,{
                        width: e,
                        height: t
                    }),
                    this.controlsAmplitudes = {
                        debugX: 8,
                        debugY: 4,
                        defaultX: .4,
                        defaultY: .1,
                        zoomX: 1,
                        zoomY: .5,
                        dirX: new S["Yb"](1,0,0),
                        dirY: new S["Yb"](1,0,0)
                    },
                    this.helicopter = new Za(this.helicopterGroup,{
                        amplitude: .25,
                        velocity: .1
                    })
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.controls.resize(e, t),
                    this.main.aspect = e / t,
                    this.main.updateProjectionMatrix()
                }
            }, {
                key: "dispose",
                value: function() {
                    this.controls.dispose()
                }
            }, {
                key: "tick",
                value: function(e) {
                    var t = e.time
                      , n = e.firstCam
                      , a = e.secondCam
                      , s = e.outCam
                      , i = e.inOut
                      , r = e.fade
                      , o = e.debug
                      , l = void 0 !== o && o;
                    this.helicopter.tick(t);
                    var c = this.controls.getPosition(t)
                      , u = Object(Ya["a"])(c, 2)
                      , d = u[0]
                      , m = u[1]
                      , h = this.controlsAmplitudes
                      , p = h.debugX
                      , f = h.debugY
                      , A = h.defaultX
                      , g = h.defaultY
                      , v = (h.zoomX,
                    h.zoomY,
                    h.dirX)
                      , b = h.dirY
                      , x = l ? m * p * 2 : m * A * 2
                      , y = l ? d * -f * 2 : d * -g * 2
                      , w = l ? d * p : d * A
                      , C = l ? m * f : m * g;
                    if (this.controlGroup.position.set(x * v.x + y * b.x, x * v.y + y * b.y, x * v.z + y * b.z),
                    this.controlGroup.rotation.set(w, C, 0),
                    this.dragData.x -= Math.min(.001, Math.max(-.001, this.dragData.x)),
                    this.dragData.y -= Math.min(.001, Math.max(-.001, this.dragData.y)),
                    this.dragGround.quaternion.setFromAxisAngle(new S["Yb"](0,1,0), this.dragData.x * this.dragData.power),
                    es.setFromAxisAngle(Ka.set(1, 0, 0), this.dragData.y * this.dragData.power),
                    this.dragGround.quaternion.multiply(es),
                    this.list.length > 1) {
                        if (a + 1 > this.list.length)
                            return console.error("Need more camera " + a + " " + this.list.length);
                        Ka.lerpVectors(this.list[n].position, this.list[a].position, r),
                        $a.lerpVectors(this.targets[n], this.targets[a], r),
                        this.containerGroup.position.lerpVectors(Ka, this.list[s].position, i),
                        $a.lerp(this.targets[s], i),
                        this.main.lookAt($a)
                    }
                }
            }, {
                key: "group",
                get: function() {
                    return this.dragGround
                }
            }]),
            e
        }()
          , ns = n("9945")
          , as = n.n(ns)
          , ss = n("184c")
          , is = n.n(ss)
          , rs = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, e, {
                map: {
                    type: "t",
                    value: null
                },
                uPos: {
                    type: "v2",
                    value: new S["Xb"](0,0)
                },
                uSize: {
                    type: "v2",
                    value: new S["Xb"](1,1)
                },
                uUvPos: {
                    type: "v2",
                    value: new S["Xb"](0,0)
                },
                uUvSize: {
                    type: "v2",
                    value: new S["Xb"](1,1)
                },
                uColor: {
                    type: "v3",
                    value: new S["o"]
                }
            }])
        }
          , os = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.uniforms
              , a = void 0 === n ? {} : n
              , s = t.defines
              , i = void 0 === s ? {} : s;
            return Object(v["a"])(this, e),
            new S["Jb"]({
                name: "Mesh2DMaterial",
                vertexShader: as.a,
                fragmentShader: is.a,
                uniforms: rs(a),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: i,
                lights: !1
            })
        }
          , ls = function(e, t, n) {
            return t.name.indexOf(e) > -1 && (n.push(t),
            !0)
        }
          , cs = (new S["Yb"](0,1,0),
        new S["Bb"]);
        if (cs.setFromAxisAngle(new S["Yb"](1,0,0), Math.PI / 4),
        Ft.COLOR_GUI) {
            var us = Ca()
              , ds = Ma()
              , ms = ja()
              , hs = Ga().material
              , ps = {
                defaultColor: us.uniforms.diffuseDark.value.getHex(),
                slider: us.uniforms.diffuseSlider.value,
                wireframeColor: ms.color.getHex(),
                wireframeCubeColor: hs.color.getHex()
            };
            Wa.addColor(ps, "defaultColor").name("Dark color").onChange(function(e) {
                us.uniforms.diffuseDark.value.set(e),
                ds.uniforms.diffuseDark.value.set(e)
            }),
            Wa.add(ps, "slider", 0, 1, .01).name("Slider dark").onChange(function(e) {
                us.uniforms.diffuseSlider.value = e,
                ds.uniforms.diffuseSlider.value = e
            }),
            Wa.addColor(ps, "wireframeColor").name("Trans wir").onChange(function(e) {
                ms.color.setHex(e)
            }),
            Wa.addColor(ps, "wireframeCubeColor").name("Cube wir").onChange(function(e) {
                hs.color.setHex(e)
            })
        }
        var fs = function() {
            function e(t, n, a, s) {
                Object(v["a"])(this, e),
                this.name = s,
                this.engine = t,
                this.width = n,
                this.height = a,
                this.inOut = -1,
                this.fade = 0,
                this.state = 0,
                this.toRight = !0,
                this.isIntro = !0,
                this.loadTracker = $t.getLoadTracker(this.name),
                this.scene = new S["Hb"],
                Ft.WIREFRAME && (this.scene.overrideMaterial = new S["db"]({
                    wireframe: !0
                })),
                this.scene.background = new S["o"](2121098),
                this.backgrounds = [new S["o"](R.BACKGROUNDS.STATE1), new S["o"](R.BACKGROUNDS.STATE2), new S["o"](R.BLUEPRINT.BACKGROUND), new S["o"](R.BACKGROUNDS.STATE4)],
                this.initCamera(n, a),
                this.initContainers(),
                this.initRadials(),
                this.initBg(n, a),
                this.resize(n, a)
            }
            return Object(b["a"])(e, [{
                key: "initCamera",
                value: function(e, t) {
                    this.cameras = new ts(e,t,this.name),
                    this.scene.add(this.cameras.group)
                }
            }, {
                key: "initRadials",
                value: function() {
                    this.vignettingControllers = [];
                    for (var e = [this.defaultContent, this.cubeContent, this.blueprintContent, this.xraysContent], t = 0; t < 4; t++) {
                        var n = La(t)
                          , a = n.material
                          , s = n.controller
                          , i = Fa(a)
                          , r = e[t];
                        this.vignettingControllers[t] = s,
                        i.name = "vignetting",
                        i.layers.mask = r.layers.mask,
                        i.renderOrder = 100,
                        i.frustumCulled = !1,
                        r.add(i)
                    }
                }
            }, {
                key: "initLight",
                value: function(e) {
                    var t = this;
                    this.renderer.shadowMap.enabled = !0,
                    this.renderer.shadowMap.type = S["tb"],
                    this.renderer.shadowMap.autoUpdate = !1,
                    this.renderer.shadowMap.needsUpdate = !1,
                    this.ambiants = [this.initLightAmbiant(e, 0), this.initLightAmbiant(e, 1)],
                    this.lights = [this.initLightState(e, {
                        layer: 0,
                        size: [4098 * Yt.TEXTURE, 4098 * Yt.TEXTURE]
                    }), this.initLightState(e, {
                        layer: 1,
                        size: [2048 * Yt.TEXTURE, 2048 * Yt.TEXTURE]
                    })],
                    Ft.LIGHTS && requestAnimationFrame(function() {
                        var e = ["x", "y", "z"]
                          , n = ["tx", "ty", "tz"]
                          , a = ["mx", "my", "mz"]
                          , s = {
                            x: t.lights[0].position.toArray()[0],
                            y: t.lights[0].position.toArray()[1],
                            z: t.lights[0].position.toArray()[2],
                            tx: t.lights[0].target.position.toArray()[0],
                            ty: t.lights[0].target.position.toArray()[1],
                            tz: t.lights[0].target.position.toArray()[2],
                            mx: t.lights[1].position.toArray()[0] - t.lights[0].position.toArray()[0],
                            my: t.lights[1].position.toArray()[1] - t.lights[0].position.toArray()[1],
                            mz: t.lights[1].position.toArray()[2] - t.lights[0].position.toArray()[2]
                        }
                          , i = function() {
                            var i, r, o, l;
                            (i = t.lights[0].position).set.apply(i, Object(T["a"])(e.map(function(e) {
                                return s[e]
                            }))),
                            (r = t.lights[0].target.position).set.apply(r, Object(T["a"])(n.map(function(e) {
                                return s[e]
                            }))),
                            (o = t.lights[1].position).set.apply(o, Object(T["a"])(a.map(function(t, n) {
                                return s[e[n]] + s[t]
                            }))),
                            (l = t.lights[1].target.position).set.apply(l, Object(T["a"])(a.map(function(e, t) {
                                return s[n[t]] + s[e]
                            }))),
                            t.updateShadows()
                        }
                          , r = Wa.addFolder(t.name + " state 1");
                        e.forEach(function(e) {
                            return r.add(s, e, void 0, void 0, .1).name("Source " + e).onChange(i)
                        }),
                        e.forEach(function(e) {
                            return r.add(s, "t" + e, void 0, void 0, .1).name("Target " + e).onChange(i)
                        });
                        var o = Wa.addFolder(t.name + " state 2");
                        e.forEach(function(e) {
                            return o.add(s, "m" + e, void 0, void 0, .1).name("Move " + e).onChange(i)
                        })
                    })
                }
            }, {
                key: "initLightAmbiant",
                value: function(e, t) {
                    this.lightAmbiant = new S["c"](R.LIGHT[t].AMBIANT.COLOR,R.LIGHT[t].AMBIANT.INTENSITY),
                    this.lightAmbiant.layers.set(t),
                    e.add(this.lightAmbiant)
                }
            }, {
                key: "initLightState",
                value: function(e, t) {
                    var n = t.layer
                      , a = t.size
                      , s = new S["Yb"](0,0,2)
                      , i = new S["t"](R.LIGHT[n].SUN.COLOR,R.LIGHT[n].SUN.INTENSITY);
                    return i.layers.set(n),
                    i.position.set(0, 0, 0).add(s),
                    i.target.position.set(-.4, -.9, -2.1).add(s),
                    i.castShadow = !0,
                    i.shadow.mapSize.width = a[0],
                    i.shadow.mapSize.height = a[1],
                    i.shadow.radius = 1,
                    i.shadow.bias = 1e-5,
                    Ft.LIGHTS && requestAnimationFrame(function() {
                        var t = new S["u"](i,5);
                        t.layers.enable(n),
                        e.add(t);
                        var a = new S["m"](i.shadow.camera);
                        t.layers.enable(n),
                        e.add(a),
                        t.layers.enable(n),
                        a.layers.enable(n)
                    }),
                    e.add(i.target),
                    e.add(i),
                    i
                }
            }, {
                key: "initBg",
                value: function(e, t) {
                    var n = $t.getLoadTracker(V.a)
                      , a = (new S["Sb"]).load(V.a, function() {
                        return n(a)
                    });
                    a.wrapS = S["Fb"],
                    a.wrapT = S["Fb"],
                    a.magFilter = S["gb"],
                    a.minFilter = S["gb"],
                    this.bgCross = Fa(new H),
                    this.bgCross.material.uniforms.map.value = a,
                    this.bgCross.material.uniforms.screenSize.value.set(e, t),
                    this.bgCross.material.uniforms.textureSize.value.set(47, 3008),
                    this.bgCross.layers.set(1),
                    this.bgCross.layers.enable(3),
                    this.bgCross.position.z = -5,
                    this.cameras.main.add(this.bgCross)
                }
            }, {
                key: "initContainers",
                value: function() {
                    var e = this
                      , t = function(t, n, a) {
                        var s = new S["G"];
                        return s.name = a,
                        s.renderOrder = t,
                        s.layers.set(n),
                        e.scene.add(s),
                        s
                    };
                    this.defaultContent = t(10, 0, "defaultContent"),
                    this.cubeContent = t(20, 1, "cubeContent"),
                    this.blueprintContent = t(30, 2, "blueprintContent"),
                    this.xraysContent = t(40, 3, "xraysContent"),
                    this.targetContent = t(50, 4, "targetContent"),
                    this.targetContent.visible = !1
                }
            }, {
                key: "initWireframeCube",
                value: function() {
                    this.cubeWireframe = Ga(),
                    this.cubeWireframe.layers.mask = this.cubeContent.layers.mask,
                    this.cubeWireframe.layers.enable(3);
                    var t = e.getBoundingBox(this.cubeContent)
                      , n = 3 * Math.max((t.max.x - t.min.x) / 2, (t.max.y - t.min.y) / 2, (t.max.z - t.min.z) / 2);
                    this.cubeWireframe.position.set((t.max.x - t.min.x) / 2 + t.min.x, n / 2 - (t.max.y - t.min.y) / 2 - (t.max.y - t.min.y) * this.wireframeCubeFactor, (t.max.z - t.min.z) / 2 + t.min.z),
                    this.cubeWireframe.scale.set(n, n, n),
                    this.cubeContent.add(this.cubeWireframe)
                }
            }, {
                key: "initWireframeTransition",
                value: function() {
                    var e = this.blueprintContent;
                    this.wireframeTransitionMaterial = ja(),
                    this.wireframeTransitionMesh = new S["G"],
                    this.wireframeTransitionMesh.layers.mask = this.defaultContent.layers.mask,
                    this.wireframeTransitionMesh.layers.enable(1),
                    this.wireframeTransitionMesh.renderOrder = 100,
                    this.wireframeTransitionMesh.position.copy(this.cameras.list[0].position.clone().setLength(.005));
                    var t = Object(T["a"])(e.children)
                      , n = !0
                      , a = !1
                      , s = void 0;
                    try {
                        for (var i, r = f()(t); !(n = (i = r.next()).done); n = !0) {
                            var o = i.value;
                            if ("vignetting" !== o.name) {
                                var l = new X(o.geometry)
                                  , c = new S["S"](l,this.wireframeTransitionMaterial);
                                c.renderOrder = 10,
                                c.layers.mask = this.wireframeTransitionMesh.layers.mask,
                                this.wireframeTransitionMesh.add(c)
                            }
                        }
                    } catch (u) {
                        a = !0,
                        s = u
                    } finally {
                        try {
                            n || null == r.return || r.return()
                        } finally {
                            if (a)
                                throw s
                        }
                    }
                    this.scene.add(this.wireframeTransitionMesh)
                }
            }, {
                key: "initDarker",
                value: function(e) {
                    var t = this
                      , n = 0;
                    this.darkerTween = null,
                    this.darkerOver = function() {
                        t.darkerTween && t.darkerTween.remove(),
                        t.darkerTween = new de({
                            from: n,
                            to: 1,
                            duration: 1e3,
                            easing: [0, .5, .5, 1]
                        }).onChange(function(t) {
                            n = t,
                            e.forEach(function(e) {
                                e.uniforms.diffuseSlider.value = t
                            })
                        }).onEnd(function() {
                            e.forEach(function(e) {
                                e.uniforms.diffuseSlider.value = 1
                            })
                        })
                    }
                    ,
                    this.darkerOut = function() {
                        t.darkerTween && t.darkerTween.remove(),
                        t.darkerTween = new de({
                            from: n,
                            to: 0,
                            duration: 1e3,
                            easing: [0, .5, .5, 1]
                        }).onChange(function(t) {
                            n = t,
                            e.forEach(function(e) {
                                e.uniforms.diffuseSlider.value = t
                            })
                        }).onEnd(function() {
                            e.forEach(function(e) {
                                e.uniforms.diffuseSlider.value = 0
                            })
                        })
                    }
                    ,
                    $t.onIntroExploreOver.add(this.darkerOver),
                    $t.onIntroExploreOut.add(this.darkerOut)
                }
            }, {
                key: "getRenderData",
                value: function() {
                    var e = this
                      , t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.engine.renderer.autoClear = t,
                    this.engine.renderer.autoClearColor = t,
                    this.engine.renderer.autoClearDepth = t,
                    this.engine.renderer.autoClearStencil = t;
                    var n = this.state
                      , a = this.fade > 0 ? this.state + 1 : this.state;
                    if (this.fade > 0 && a < 4) {
                        var s = [function() {
                            return e.cameras.setLayers(n),
                            e.scene.background = e.backgrounds[n],
                            [e.scene, e.cameras.main]
                        }
                        , function() {
                            return e.cameras.setLayers(a),
                            e.scene.background = e.backgrounds[a],
                            [e.scene, e.cameras.main]
                        }
                        ];
                        return s
                    }
                    var i = [function() {
                        return e.cameras.setLayers(n),
                        e.scene.background = e.backgrounds[n],
                        [e.scene, e.cameras.main]
                    }
                    ];
                    return i
                }
            }, {
                key: "getMesh",
                value: function(e, t) {
                    var n = null;
                    return t.traverse(function(t) {
                        t.name.indexOf(e) > -1 && (n = t)
                    }),
                    n
                }
            }, {
                key: "getMeshData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultContent
                      , n = this.meshesData.find(function(n) {
                        return n.label === e && n.parent === t
                    });
                    return n || console.error(e + " not found in " + this.name),
                    n
                }
            }, {
                key: "getUnmeshData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.defaultContent
                      , n = this.unmeshesData.find(function(n) {
                        return n.label === e && n.parent === t
                    });
                    return n
                }
            }, {
                key: "getMeshes",
                value: function(e) {
                    var t = [];
                    return e.traverse(function(e) {
                        e.isMesh && t.push(e)
                    }),
                    t
                }
            }, {
                key: "modelLoaded",
                value: function() {
                    this.loadTracker(this.name),
                    Ft.LIGHTS && this.cameras.moveAway(2)
                }
            }, {
                key: "forceRender",
                value: function() {
                    var e = this;
                    Ft.LIGHTS && this.cameras.moveAway(2);
                    var t = [0, 1];
                    return Ft.PRERENDER_DISABLED ? [] : t.map(function(t) {
                        return function() {
                            var n = g()();
                            e.cameras.setLayers(t),
                            e.engine.forceRender(e.scene, e.cameras.main),
                            t < 2 && e.updateShadows(),
                            e.engine.render([function() {
                                return [e.scene, e.cameras.main]
                            }
                            ]),
                            console.log("%c" + e.name + " layer " + (t + 1) + " prerender time: %c" + (g()() - n) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;")
                        }
                    }).concat([function() {
                        var t = g()();
                        e.cameras.setLayers(2),
                        e.engine.forceRender(e.scene, e.cameras.main),
                        e.engine.render([function() {
                            return [e.scene, e.cameras.main]
                        }
                        ]),
                        e.cameras.setLayers(3),
                        e.engine.forceRender(e.scene, e.cameras.main),
                        e.engine.render([function() {
                            return [e.scene, e.cameras.main]
                        }
                        ]),
                        console.log("%c" + e.name + " layer 3-4 prerender time: %c" + (g()() - t) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;")
                    }
                    ])
                }
            }, {
                key: "mergeMesh",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , a = this.getMeshData(e, t);
                    ee(a.list, a.mesh, n)
                }
            }, {
                key: "cloneMoveMergeMesh",
                value: function(e, t, n, a) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
                      , i = this.getMeshData(e, t);
                    ee(this.getUnmeshData(n, t).list, i.mesh, D()(s, {
                        meshPositions: this.getUnmeshData(a, t).list
                    }))
                }
            }, {
                key: "cloneMoveMergeMeshFromOther",
                value: function(e, t, n, a, s) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                      , r = this.getMeshData(e, a);
                    ee(this.getUnmeshData(n, t).list, r.mesh, D()(i, {
                        meshPositions: this.getUnmeshData(s, a).list
                    }))
                }
            }, {
                key: "updateShadows",
                value: function() {
                    var e = this;
                    this.renderer.shadowMap.autoUpdate = !0,
                    window.requestAnimationFrame(function() {
                        return e.renderer.shadowMap.autoUpdate = !1
                    })
                }
            }, {
                key: "setCameras",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.cameras.addCameras(e, this.width, this.height, t)
                }
            }, {
                key: "setBoxSize",
                value: function(e) {
                    this.boxMesh && (this.boxMesh.material.uniforms.uPos.value.set(e.x, 1 - (e.y + e.height)),
                    this.boxMesh.material.uniforms.uSize.value.set(e.width, e.height))
                }
            }, {
                key: "sortMeshes",
                value: function(e, t, n, a) {
                    var s = !1;
                    e.traverse(function(e) {
                        if (e.isMesh) {
                            var i = t.map(function(t) {
                                return ls(t.label, e, t.list)
                            }).indexOf(!0) > -1
                              , r = !i && n.map(function(t) {
                                return ls(t.label, e, t.list)
                            }).indexOf(!0) > -1;
                            i || r ? s = !0 : a.list.push(e)
                        }
                    }),
                    s || t.length < 2 && t[0] === a || console.error("sortMeshes() not found", e, t, n, a)
                }
            }, {
                key: "blueprintHideBackWireframe",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = new S["cb"](e.geometry,ya(t));
                    return n.name = "mask",
                    n.layers.mask = e.layers.mask,
                    n
                }
            }, {
                key: "xrayMesh",
                value: function() {
                    var e = this.xraysContent.children.find(function(e) {
                        var t = e.name;
                        return "wireframe" === t
                    })
                      , t = this.blueprintContent.children.find(function(e) {
                        var t = e.name;
                        return "wireframe" === t
                    });
                    t = new S["S"](t.geometry,Ea()),
                    t.renderOrder = t.renderOrder + 3,
                    t.layers.mask = e.layers.mask,
                    this.xraysContent.add(t)
                }
            }, {
                key: "blueprintMesh",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = Object(T["a"])(e.children)
                      , s = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var o, l = function() {
                            var a = o.value;
                            if ("vignetting" !== a.name) {
                                var s = new X(a.geometry)
                                  , i = new S["S"](s,a.material);
                                i.layers.mask = a.layers.mask,
                                i.material.depthTest = !0,
                                i.name = a.name,
                                i.renderOrder = 4,
                                e.remove(a),
                                e.add(i);
                                var r = t.meshesData.filter(function(e) {
                                    return e.mesh === a
                                });
                                r.mesh = i;
                                var l = t.blueprintHideBackWireframe(a, n);
                                l.renderOrder = 2,
                                e.add(l)
                            }
                        }, c = f()(a); !(s = (o = c.next()).done); s = !0)
                            l()
                    } catch (p) {
                        i = !0,
                        r = p
                    } finally {
                        try {
                            s || null == c.return || c.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    var u = {
                        t: .1,
                        l: .1,
                        w: .5,
                        h: .8
                    }
                      , d = new os;
                    d.depthTest = !1,
                    d.depthWrite = !1;
                    var m = d.uniforms;
                    m.uColor.value.set(R.BLUEPRINT.BOX),
                    m.uPos.value.set(u.l, 1 - (u.t + u.h)),
                    m.uSize.value.set(u.w, u.h);
                    var h = new S["wb"](1,1,1,1);
                    h.vertices.forEach(function(e) {
                        e.x = e.x < 0 ? 0 : 1,
                        e.y = e.y < 0 ? 0 : 1
                    }),
                    qt.RED_BLOCK && (this.boxMesh = new S["cb"](h,d),
                    this.boxMesh.frustumCulled = !1,
                    this.boxMesh.layers.mask = a[0].layers.mask,
                    this.boxMesh.renderOrder = 3,
                    e.add(this.boxMesh))
                }
            }, {
                key: "tick",
                value: function(e) {
                    var t = Math.abs(this.inOut)
                      , n = this.cameras.list.length
                      , a = this.state
                      , s = this.fade > 0 && 3 !== this.state ? this.state + 1 : this.state
                      , i = this.isIntro ? n - 1 : this.toRight ? n - 2 : n - 3;
                    if (this.wireframeTransitionMaterial)
                        if (0 === a && this.darkerTween && this.darkerTween.value > 0) {
                            var r = this.darkerTween.value;
                            this.wireframeTransitionMaterial.opacity = r * R.MODEL.WIREFRAME_TRANSITION_OPACITY,
                            this.wireframeTransitionMesh.visible = !0
                        } else if (0 === a && 1 === s && this.fade > 0) {
                            var o = 1 - Math.pow(2 * Math.abs(this.fade - .5), 2);
                            this.wireframeTransitionMaterial.opacity = o * R.MODEL.WIREFRAME_TRANSITION_OPACITY,
                            this.wireframeTransitionMesh.visible = !0
                        } else
                            (0 === a && this.fade <= 0 || 1 === a && 1 === s && this.fade <= 0) && (this.wireframeTransitionMaterial.opacity = 0,
                            this.wireframeTransitionMesh.visible = !1);
                    (0 === this.state || 2 === this.state) && this.fade > 0 ? this.cameras.dragPower(this.fade) : 1 === this.state ? this.fade > 0 ? this.cameras.dragPower(1 - this.fade) : this.cameras.dragPower(1) : 3 === this.state ? this.cameras.dragPower(1) : this.cameras.dragPower(0),
                    this.cameras.tick({
                        time: e,
                        firstCam: a,
                        secondCam: s,
                        outCam: i,
                        inOut: t,
                        fade: this.fade,
                        debug: Ft.LIGHTS
                    })
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.width = e,
                    this.height = t,
                    this.cameras.resize(e, t),
                    this.bgCross.material.uniforms.screenSize.value.set(e, t),
                    this.vignettingControllers[0](e < 900 ? .22 : 0),
                    this.vignettingControllers[1](e < 900 ? .22 : 0, {
                        centerColor: 15132900,
                        cornersColor: 15132900
                    }),
                    this.vignettingControllers[2](e < 900 ? .5 : 0, {
                        centerColor: 1327748,
                        cornersColor: 1327748
                    }),
                    this.vignettingControllers[3](e < 900 ? .5 : 0, {
                        centerColor: 15132900,
                        cornersColor: 15132900
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    var e = [];
                    this.scene.traverse(function(t) {
                        return e.push(t)
                    }),
                    this.cameras.dispose(),
                    $t.onIntroExploreOver.remove(this.darkerOver),
                    $t.onIntroExploreOut.remove(this.darkerOut),
                    this.darkerTween && this.darkerTween.remove();
                    while (e.length > 0) {
                        var t = e.shift();
                        if (t.children > 0)
                            e.push(t);
                        else if (t.parent && t.parent.remove(t),
                        t.geometry && t.geometry.dispose(),
                        t.material) {
                            if (t.material.uniforms)
                                for (var n = I()(t.material.uniforms), a = 0; a < n.length; a++) {
                                    var s = n[a]
                                      , i = t.material.uniforms[s];
                                    "t" === i.type && i.value && i.value.dispose()
                                }
                            t.material.dispose()
                        }
                    }
                    this.lights.forEach(function(e) {
                        e && e.shadow && e.shadow.map && e.shadow.map.dispose()
                    })
                }
            }, {
                key: "renderer",
                get: function() {
                    return this.engine.renderer
                }
            }, {
                key: "transitionMaterial",
                get: function() {
                    return this.engine.transitionPass.material
                }
            }]),
            e
        }();
        fs.createMeshDataStruct = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , s = a.renderOrder
              , i = void 0 === s ? t.renderOrder : s;
            return n && (n.name || (n.name = e),
            n.renderOrder = i,
            n.layers.mask = t.layers.mask,
            n.frustrumCulled = !1,
            t.add(n)),
            {
                mesh: n,
                label: e,
                parent: t,
                list: []
            }
        }
        ,
        fs.getBoundingBox = function(e) {
            var t = null;
            return e.traverse(function(e) {
                var n = e.geometry;
                void 0 !== n && (n.computeBoundingBox(),
                null === t ? t = n.boundingBox : t.union(n.boundingBox))
            }),
            t
        }
        ;
        n("63d9"),
        n("9c29"),
        n("af56"),
        n("15ac"),
        n("a481"),
        n("5df3");
        S["GLTFLoader"] = function() {
            function e(e) {
                this.manager = void 0 !== e ? e : S["s"],
                this.dracoLoader = null
            }
            function t() {
                var e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, n) {
                        e[t] = n
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            e.prototype = {
                constructor: e,
                crossOrigin: "anonymous",
                load: function(e, t, n, a) {
                    var s, i = this;
                    s = void 0 !== this.resourcePath ? this.resourcePath : void 0 !== this.path ? this.path : S["X"].extractUrlBase(e),
                    i.manager.itemStart(e);
                    var r = function(t) {
                        a ? a(t) : console.error(t),
                        i.manager.itemError(e),
                        i.manager.itemEnd(e)
                    }
                      , o = new S["A"](i.manager);
                    o.setPath(this.path),
                    o.setResponseType("arraybuffer"),
                    o.load(e, function(n) {
                        try {
                            i.parse(n, s, function(n) {
                                t(n),
                                i.manager.itemEnd(e)
                            }, r)
                        } catch (a) {
                            r(a)
                        }
                    }, n, r)
                },
                setCrossOrigin: function(e) {
                    return this.crossOrigin = e,
                    this
                },
                setPath: function(e) {
                    return this.path = e,
                    this
                },
                setResourcePath: function(e) {
                    return this.resourcePath = e,
                    this
                },
                setDRACOLoader: function(e) {
                    return this.dracoLoader = e,
                    this
                },
                parse: function(e, t, o, l) {
                    var h, p = {};
                    if ("string" === typeof e)
                        h = e;
                    else {
                        var f = S["X"].decodeText(new Uint8Array(e,0,4));
                        if (f === r) {
                            try {
                                p[n.KHR_BINARY_GLTF] = new c(e)
                            } catch (y) {
                                return void (l && l(y))
                            }
                            h = p[n.KHR_BINARY_GLTF].content
                        } else
                            h = S["X"].decodeText(new Uint8Array(e))
                    }
                    var A = JSON.parse(h);
                    if (void 0 === A.asset || A.asset.version[0] < 2)
                        l && l(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));
                    else {
                        if (A.extensionsUsed)
                            for (var g = 0; g < A.extensionsUsed.length; ++g) {
                                var v = A.extensionsUsed[g]
                                  , b = A.extensionsRequired || [];
                                switch (v) {
                                case n.KHR_LIGHTS_PUNCTUAL:
                                    p[v] = new s(A);
                                    break;
                                case n.KHR_MATERIALS_UNLIT:
                                    p[v] = new i(A);
                                    break;
                                case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                    p[v] = new m(A);
                                    break;
                                case n.KHR_DRACO_MESH_COMPRESSION:
                                    p[v] = new u(A,this.dracoLoader);
                                    break;
                                case n.MSFT_TEXTURE_DDS:
                                    p[n.MSFT_TEXTURE_DDS] = new a(A);
                                    break;
                                case n.KHR_TEXTURE_TRANSFORM:
                                    p[n.KHR_TEXTURE_TRANSFORM] = new d(A);
                                    break;
                                default:
                                    b.indexOf(v) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + v + '".')
                                }
                            }
                        var x = new F(A,p,{
                            path: t || this.resourcePath || "",
                            crossOrigin: this.crossOrigin,
                            manager: this.manager
                        });
                        x.parse(function(e, t, n, a, s) {
                            var i = {
                                scene: e,
                                scenes: t,
                                cameras: n,
                                animations: a,
                                asset: s.asset,
                                parser: x,
                                userData: {}
                            };
                            T(p, i, s),
                            o(i)
                        }, l)
                    }
                }
            };
            var n = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                MSFT_TEXTURE_DDS: "MSFT_texture_dds"
            };
            function a() {
                if (!S["DDSLoader"])
                    throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader");
                this.name = n.MSFT_TEXTURE_DDS,
                this.ddsLoader = new S["DDSLoader"]
            }
            function s(e) {
                this.name = n.KHR_LIGHTS_PUNCTUAL;
                var t = e.extensions && e.extensions[n.KHR_LIGHTS_PUNCTUAL] || {};
                this.lightDefs = t.lights || []
            }
            function i(e) {
                this.name = n.KHR_MATERIALS_UNLIT
            }
            s.prototype.loadLight = function(e) {
                var t, n = this.lightDefs[e], a = new S["o"](16777215);
                void 0 !== n.color && a.fromArray(n.color);
                var s = void 0 !== n.range ? n.range : 0;
                switch (n.type) {
                case "directional":
                    t = new S["t"](a),
                    t.target.position.set(0, 0, -1),
                    t.add(t.target);
                    break;
                case "point":
                    t = new S["xb"](a),
                    t.distance = s;
                    break;
                case "spot":
                    t = new S["Mb"](a),
                    t.distance = s,
                    n.spot = n.spot || {},
                    n.spot.innerConeAngle = void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0,
                    n.spot.outerConeAngle = void 0 !== n.spot.outerConeAngle ? n.spot.outerConeAngle : Math.PI / 4,
                    t.angle = n.spot.outerConeAngle,
                    t.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle,
                    t.target.position.set(0, 0, -1),
                    t.add(t.target);
                    break;
                default:
                    throw new Error('THREE.GLTFLoader: Unexpected light type, "' + n.type + '".')
                }
                return t.decay = 2,
                void 0 !== n.intensity && (t.intensity = n.intensity),
                t.name = n.name || "light_" + e,
                Xt.a.resolve(t)
            }
            ,
            i.prototype.getMaterialType = function(e) {
                return S["db"]
            }
            ,
            i.prototype.extendParams = function(e, t, n) {
                var a = [];
                e.color = new S["o"](1,1,1),
                e.opacity = 1;
                var s = t.pbrMetallicRoughness;
                if (s) {
                    if (ne()(s.baseColorFactor)) {
                        var i = s.baseColorFactor;
                        e.color.fromArray(i),
                        e.opacity = i[3]
                    }
                    void 0 !== s.baseColorTexture && a.push(n.assignTexture(e, "map", s.baseColorTexture))
                }
                return Xt.a.all(a)
            }
            ;
            var r = "glTF"
              , o = 12
              , l = {
                JSON: 1313821514,
                BIN: 5130562
            };
            function c(e) {
                this.name = n.KHR_BINARY_GLTF,
                this.content = null,
                this.body = null;
                var t = new DataView(e,0,o);
                if (this.header = {
                    magic: S["X"].decodeText(new Uint8Array(e.slice(0, 4))),
                    version: t.getUint32(4, !0),
                    length: t.getUint32(8, !0)
                },
                this.header.magic !== r)
                    throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                if (this.header.version < 2)
                    throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
                var a = new DataView(e,o)
                  , s = 0;
                while (s < a.byteLength) {
                    var i = a.getUint32(s, !0);
                    s += 4;
                    var c = a.getUint32(s, !0);
                    if (s += 4,
                    c === l.JSON) {
                        var u = new Uint8Array(e,o + s,i);
                        this.content = S["X"].decodeText(u)
                    } else if (c === l.BIN) {
                        var d = o + s;
                        this.body = e.slice(d, d + i)
                    }
                    s += i
                }
                if (null === this.content)
                    throw new Error("THREE.GLTFLoader: JSON content not found.")
            }
            function u(e, t) {
                if (!t)
                    throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                this.name = n.KHR_DRACO_MESH_COMPRESSION,
                this.json = e,
                this.dracoLoader = t,
                S["DRACOLoader"].getDecoderModule()
            }
            function d(e) {
                this.name = n.KHR_TEXTURE_TRANSFORM
            }
            function m() {
                return {
                    name: n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                    specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                    getMaterialType: function() {
                        return S["Jb"]
                    },
                    extendParams: function(e, t, n) {
                        var a = t.extensions[this.name]
                          , s = S["Ib"]["standard"]
                          , i = S["Wb"].clone(s.uniforms)
                          , r = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n")
                          , o = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n")
                          , l = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n")
                          , c = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n")
                          , u = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n")
                          , d = s.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", r).replace("#include <metalnessmap_pars_fragment>", o).replace("#include <roughnessmap_fragment>", l).replace("#include <metalnessmap_fragment>", c).replace("#include <lights_physical_fragment>", u);
                        delete i.roughness,
                        delete i.metalness,
                        delete i.roughnessMap,
                        delete i.metalnessMap,
                        i.specular = {
                            value: (new S["o"]).setHex(1118481)
                        },
                        i.glossiness = {
                            value: .5
                        },
                        i.specularMap = {
                            value: null
                        },
                        i.glossinessMap = {
                            value: null
                        },
                        e.vertexShader = s.vertexShader,
                        e.fragmentShader = d,
                        e.uniforms = i,
                        e.defines = {
                            STANDARD: ""
                        },
                        e.color = new S["o"](1,1,1),
                        e.opacity = 1;
                        var m = [];
                        if (ne()(a.diffuseFactor)) {
                            var h = a.diffuseFactor;
                            e.color.fromArray(h),
                            e.opacity = h[3]
                        }
                        if (void 0 !== a.diffuseTexture && m.push(n.assignTexture(e, "map", a.diffuseTexture)),
                        e.emissive = new S["o"](0,0,0),
                        e.glossiness = void 0 !== a.glossinessFactor ? a.glossinessFactor : 1,
                        e.specular = new S["o"](1,1,1),
                        ne()(a.specularFactor) && e.specular.fromArray(a.specularFactor),
                        void 0 !== a.specularGlossinessTexture) {
                            var p = a.specularGlossinessTexture;
                            m.push(n.assignTexture(e, "glossinessMap", p)),
                            m.push(n.assignTexture(e, "specularMap", p))
                        }
                        return Xt.a.all(m)
                    },
                    createMaterial: function(e) {
                        var t = new S["Jb"]({
                            defines: e.defines,
                            vertexShader: e.vertexShader,
                            fragmentShader: e.fragmentShader,
                            uniforms: e.uniforms,
                            fog: !0,
                            lights: !0,
                            opacity: e.opacity,
                            transparent: e.transparent
                        });
                        return t.isGLTFSpecularGlossinessMaterial = !0,
                        t.color = e.color,
                        t.map = void 0 === e.map ? null : e.map,
                        t.lightMap = null,
                        t.lightMapIntensity = 1,
                        t.aoMap = void 0 === e.aoMap ? null : e.aoMap,
                        t.aoMapIntensity = 1,
                        t.emissive = e.emissive,
                        t.emissiveIntensity = 1,
                        t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap,
                        t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap,
                        t.bumpScale = 1,
                        t.normalMap = void 0 === e.normalMap ? null : e.normalMap,
                        e.normalScale && (t.normalScale = e.normalScale),
                        t.displacementMap = null,
                        t.displacementScale = 1,
                        t.displacementBias = 0,
                        t.specularMap = void 0 === e.specularMap ? null : e.specularMap,
                        t.specular = e.specular,
                        t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap,
                        t.glossiness = e.glossiness,
                        t.alphaMap = null,
                        t.envMap = void 0 === e.envMap ? null : e.envMap,
                        t.envMapIntensity = 1,
                        t.refractionRatio = .98,
                        t.extensions.derivatives = !0,
                        t
                    },
                    cloneMaterial: function(e) {
                        var t = e.clone();
                        t.isGLTFSpecularGlossinessMaterial = !0;
                        for (var n = this.specularGlossinessParams, a = 0, s = n.length; a < s; a++)
                            t[n[a]] = e[n[a]];
                        return t
                    },
                    refreshUniforms: function(e, t, n, a, s, i) {
                        if (!0 === s.isGLTFSpecularGlossinessMaterial) {
                            var r, o = s.uniforms, l = s.defines;
                            o.opacity.value = s.opacity,
                            o.diffuse.value.copy(s.color),
                            o.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),
                            o.map.value = s.map,
                            o.specularMap.value = s.specularMap,
                            o.alphaMap.value = s.alphaMap,
                            o.lightMap.value = s.lightMap,
                            o.lightMapIntensity.value = s.lightMapIntensity,
                            o.aoMap.value = s.aoMap,
                            o.aoMapIntensity.value = s.aoMapIntensity,
                            s.map ? r = s.map : s.specularMap ? r = s.specularMap : s.displacementMap ? r = s.displacementMap : s.normalMap ? r = s.normalMap : s.bumpMap ? r = s.bumpMap : s.glossinessMap ? r = s.glossinessMap : s.alphaMap ? r = s.alphaMap : s.emissiveMap && (r = s.emissiveMap),
                            void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
                            !0 === r.matrixAutoUpdate && r.updateMatrix(),
                            o.uvTransform.value.copy(r.matrix)),
                            s.envMap && (o.envMap.value = s.envMap,
                            o.envMapIntensity.value = s.envMapIntensity,
                            o.flipEnvMap.value = s.envMap.isCubeTexture ? -1 : 1,
                            o.reflectivity.value = s.reflectivity,
                            o.refractionRatio.value = s.refractionRatio,
                            o.maxMipLevel.value = e.properties.get(s.envMap).__maxMipLevel),
                            o.specular.value.copy(s.specular),
                            o.glossiness.value = s.glossiness,
                            o.glossinessMap.value = s.glossinessMap,
                            o.emissiveMap.value = s.emissiveMap,
                            o.bumpMap.value = s.bumpMap,
                            o.normalMap.value = s.normalMap,
                            o.displacementMap.value = s.displacementMap,
                            o.displacementScale.value = s.displacementScale,
                            o.displacementBias.value = s.displacementBias,
                            null !== o.glossinessMap.value && void 0 === l.USE_GLOSSINESSMAP && (l.USE_GLOSSINESSMAP = "",
                            l.USE_ROUGHNESSMAP = ""),
                            null === o.glossinessMap.value && void 0 !== l.USE_GLOSSINESSMAP && (delete l.USE_GLOSSINESSMAP,
                            delete l.USE_ROUGHNESSMAP)
                        }
                    }
                }
            }
            function h(e, t, n, a) {
                S["J"].call(this, e, t, n, a)
            }
            u.prototype.decodePrimitive = function(e, t) {
                var n = this.json
                  , a = this.dracoLoader
                  , s = e.extensions[this.name].bufferView
                  , i = e.extensions[this.name].attributes
                  , r = {}
                  , o = {}
                  , l = {};
                for (var c in i)
                    c in b && (r[b[c]] = i[c]);
                for (c in e.attributes)
                    if (void 0 !== b[c] && void 0 !== i[c]) {
                        var u = n.accessors[e.attributes[c]]
                          , d = f[u.componentType];
                        l[b[c]] = d,
                        o[b[c]] = !0 === u.normalized
                    }
                return t.getDependency("bufferView", s).then(function(e) {
                    return new Xt.a(function(t) {
                        a.decodeDracoFile(e, function(e) {
                            for (var n in e.attributes) {
                                var a = e.attributes[n]
                                  , s = o[n];
                                void 0 !== s && (a.normalized = s)
                            }
                            t(e)
                        }, r, l)
                    }
                    )
                })
            }
            ,
            d.prototype.extendTexture = function(e, t) {
                return e = e.clone(),
                void 0 !== t.offset && e.offset.fromArray(t.offset),
                void 0 !== t.rotation && (e.rotation = t.rotation),
                void 0 !== t.scale && e.repeat.fromArray(t.scale),
                void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'),
                e.needsUpdate = !0,
                e
            }
            ,
            h.prototype = Y()(S["J"].prototype),
            h.prototype.constructor = h,
            h.prototype.copySampleValue_ = function(e) {
                for (var t = this.resultBuffer, n = this.sampleValues, a = this.valueSize, s = e * a * 3 + a, i = 0; i !== a; i++)
                    t[i] = n[s + i];
                return t
            }
            ,
            h.prototype.beforeStart_ = h.prototype.copySampleValue_,
            h.prototype.afterEnd_ = h.prototype.copySampleValue_,
            h.prototype.interpolate_ = function(e, t, n, a) {
                for (var s = this.resultBuffer, i = this.sampleValues, r = this.valueSize, o = 2 * r, l = 3 * r, c = a - t, u = (n - t) / c, d = u * u, m = d * u, h = e * l, p = h - l, f = -2 * m + 3 * d, A = m - d, g = 1 - f, v = A - d + u, b = 0; b !== r; b++) {
                    var x = i[p + b + r]
                      , y = i[p + b + o] * c
                      , w = i[h + b + r]
                      , C = i[h + b] * c;
                    s[b] = g * x + v * y + f * w + A * C
                }
                return s
            }
            ;
            var p = {
                FLOAT: 5126,
                FLOAT_MAT3: 35675,
                FLOAT_MAT4: 35676,
                FLOAT_VEC2: 35664,
                FLOAT_VEC3: 35665,
                FLOAT_VEC4: 35666,
                LINEAR: 9729,
                REPEAT: 10497,
                SAMPLER_2D: 35678,
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6,
                UNSIGNED_BYTE: 5121,
                UNSIGNED_SHORT: 5123
            }
              , f = (Number,
            S["ab"],
            S["bb"],
            S["Xb"],
            S["Yb"],
            S["Zb"],
            S["Rb"],
            {
                5120: Int8Array,
                5121: Uint8Array,
                5122: Int16Array,
                5123: Uint16Array,
                5125: Uint32Array,
                5126: Float32Array
            })
              , A = {
                9728: S["gb"],
                9729: S["T"],
                9984: S["ib"],
                9985: S["V"],
                9986: S["hb"],
                9987: S["U"]
            }
              , g = {
                33071: S["n"],
                33648: S["fb"],
                10497: S["Fb"]
            }
              , v = (S["f"],
            S["C"],
            S["jb"],
            S["N"],
            S["z"],
            S["O"],
            S["F"],
            S["kb"],
            S["F"],
            S["b"],
            S["a"],
            S["Qb"],
            S["Gb"],
            S["fc"],
            S["nb"],
            S["Pb"],
            S["rb"],
            S["Nb"],
            S["qb"],
            S["w"],
            S["ob"],
            S["x"],
            S["pb"],
            S["Ob"],
            {
                SCALAR: 1,
                VEC2: 2,
                VEC3: 3,
                VEC4: 4,
                MAT2: 4,
                MAT3: 9,
                MAT4: 16
            })
              , b = {
                POSITION: "position",
                NORMAL: "normal",
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv2",
                COLOR_0: "color",
                WEIGHTS_0: "skinWeight",
                JOINTS_0: "skinIndex"
            }
              , x = {
                scale: "scale",
                translation: "position",
                rotation: "quaternion",
                weights: "morphTargetInfluences"
            }
              , y = {
                CUBICSPLINE: S["M"],
                LINEAR: S["L"],
                STEP: S["K"]
            }
              , w = {
                OPAQUE: "OPAQUE",
                MASK: "MASK",
                BLEND: "BLEND"
            }
              , C = {
                "image/png": S["Db"],
                "image/jpeg": S["Eb"]
            };
            function M(e, t) {
                return "string" !== typeof e || "" === e ? "" : /^(https?:)?\/\//i.test(e) ? e : /^data:.*,.*$/i.test(e) ? e : /^blob:.*$/i.test(e) ? e : t + e
            }
            function _() {
                return new S["eb"]({
                    color: 16777215,
                    emissive: 0,
                    metalness: 1,
                    roughness: 1,
                    transparent: !1,
                    depthTest: !0,
                    side: S["C"]
                })
            }
            function T(e, t, n) {
                for (var a in n.extensions)
                    void 0 === e[a] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {},
                    t.userData.gltfExtensions[a] = n.extensions[a])
            }
            function L(e, t) {
                void 0 !== t.extras && ("object" === Object(ae["a"])(t.extras) ? e.userData = t.extras : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }
            function E(e, t, n) {
                for (var a = !1, s = !1, i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    if (void 0 !== o.POSITION && (a = !0),
                    void 0 !== o.NORMAL && (s = !0),
                    a && s)
                        break
                }
                if (!a && !s)
                    return Xt.a.resolve(e);
                var l = []
                  , c = [];
                for (i = 0,
                r = t.length; i < r; i++) {
                    o = t[i];
                    if (a) {
                        var u = void 0 !== o.POSITION ? n.getDependency("accessor", o.POSITION).then(function(e) {
                            return N(e)
                        }) : e.attributes.position;
                        l.push(u)
                    }
                    if (s) {
                        u = void 0 !== o.NORMAL ? n.getDependency("accessor", o.NORMAL).then(function(e) {
                            return N(e)
                        }) : e.attributes.normal;
                        c.push(u)
                    }
                }
                return Xt.a.all([Xt.a.all(l), Xt.a.all(c)]).then(function(n) {
                    for (var i = n[0], r = n[1], o = 0, l = t.length; o < l; o++) {
                        var c = t[o]
                          , u = "morphTarget" + o;
                        if (a && void 0 !== c.POSITION) {
                            var d = i[o];
                            d.name = u;
                            for (var m = e.attributes.position, h = 0, p = d.count; h < p; h++)
                                d.setXYZ(h, d.getX(h) + m.getX(h), d.getY(h) + m.getY(h), d.getZ(h) + m.getZ(h))
                        }
                        if (s && void 0 !== c.NORMAL) {
                            var f = r[o];
                            f.name = u;
                            var A = e.attributes.normal;
                            for (h = 0,
                            p = f.count; h < p; h++)
                                f.setXYZ(h, f.getX(h) + A.getX(h), f.getY(h) + A.getY(h), f.getZ(h) + A.getZ(h))
                        }
                    }
                    return a && (e.morphAttributes.position = i),
                    s && (e.morphAttributes.normal = r),
                    e
                })
            }
            function P(e, t) {
                if (e.updateMorphTargets(),
                void 0 !== t.weights)
                    for (var n = 0, a = t.weights.length; n < a; n++)
                        e.morphTargetInfluences[n] = t.weights[n];
                if (t.extras && ne()(t.extras.targetNames)) {
                    var s = t.extras.targetNames;
                    if (e.morphTargetInfluences.length === s.length) {
                        e.morphTargetDictionary = {};
                        for (n = 0,
                        a = s.length; n < a; n++)
                            e.morphTargetDictionary[s[n]] = n
                    } else
                        console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                }
            }
            function j(e, t) {
                var a = e.extensions ? e.extensions[n.KHR_DRACO_MESH_COMPRESSION] : void 0
                  , s = t.extensions ? t.extensions[n.KHR_DRACO_MESH_COMPRESSION] : void 0;
                return a && s ? a.bufferView === s.bufferView && O(a.attributes, s.attributes) : e.indices === t.indices && O(e.attributes, t.attributes)
            }
            function O(e, t) {
                if (I()(e).length !== I()(t).length)
                    return !1;
                for (var n in e)
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }
            function k(e, t) {
                if (e.length !== t.length)
                    return !1;
                for (var n = 0, a = e.length; n < a; n++)
                    if (e[n] !== t[n])
                        return !1;
                return !0
            }
            function D(e, t) {
                for (var n = 0, a = e.length; n < a; n++) {
                    var s = e[n];
                    if (j(s.primitive, t))
                        return s.promise
                }
                return null
            }
            function z(e, t) {
                for (var n = 0, a = e.length; n < a; n++) {
                    var s = e[n];
                    if (k(t, s.baseGeometries))
                        return s.geometry
                }
                return null
            }
            function R(e, t, n) {
                for (var a = 0, s = e.length; a < s; a++) {
                    var i = e[a];
                    if (t === i.baseGeometry && k(n, i.primitives))
                        return i.geometry
                }
                return null
            }
            function N(e) {
                if (e.isInterleavedBufferAttribute) {
                    for (var t = e.count, n = e.itemSize, a = e.array.slice(0, t * n), s = 0, i = 0; s < t; ++s)
                        a[i++] = e.getX(s),
                        n >= 2 && (a[i++] = e.getY(s)),
                        n >= 3 && (a[i++] = e.getZ(s)),
                        n >= 4 && (a[i++] = e.getW(s));
                    return new S["i"](a,n,e.normalized)
                }
                return e.clone()
            }
            function B(e) {
                if (e.length < 2)
                    return !1;
                var t = e[0]
                  , a = t.targets || [];
                if (void 0 === t.indices)
                    return !1;
                for (var s = 1, i = e.length; s < i; s++) {
                    var r = e[s];
                    if (t.mode !== r.mode)
                        return !1;
                    if (void 0 === r.indices)
                        return !1;
                    if (r.extensions && r.extensions[n.KHR_DRACO_MESH_COMPRESSION])
                        return !1;
                    if (!O(t.attributes, r.attributes))
                        return !1;
                    var o = r.targets || [];
                    if (a.length !== o.length)
                        return !1;
                    for (var l = 0, c = a.length; l < c; l++)
                        if (!O(a[l], o[l]))
                            return !1
                }
                return !0
            }
            function F(e, n, a) {
                this.json = e || {},
                this.extensions = n || {},
                this.options = a || {},
                this.cache = new t,
                this.primitiveCache = [],
                this.multiplePrimitivesCache = [],
                this.multiPassGeometryCache = [],
                this.textureLoader = new S["Sb"](this.options.manager),
                this.textureLoader.setCrossOrigin(this.options.crossOrigin),
                this.fileLoader = new S["A"](this.options.manager),
                this.fileLoader.setResponseType("arraybuffer")
            }
            function U(e, t, n) {
                var a = t.attributes
                  , s = [];
                function i(t, a) {
                    return n.getDependency("accessor", t).then(function(t) {
                        e.addAttribute(a, t)
                    })
                }
                for (var r in a) {
                    var o = b[r];
                    o && (o in e.attributes || s.push(i(a[r], o)))
                }
                if (void 0 !== t.indices && !e.index) {
                    var l = n.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    s.push(l)
                }
                return L(e, t),
                Xt.a.all(s).then(function() {
                    return void 0 !== t.targets ? E(e, t.targets, n) : e
                })
            }
            return F.prototype.parse = function(e, t) {
                var n = this.json;
                this.cache.removeAll(),
                this.markDefs(),
                this.getMultiDependencies(["scene", "animation", "camera"]).then(function(t) {
                    var a = t.scenes || []
                      , s = a[n.scene || 0]
                      , i = t.animations || []
                      , r = t.cameras || [];
                    e(s, a, r, i, n)
                }).catch(t)
            }
            ,
            F.prototype.markDefs = function() {
                for (var e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [], a = {}, s = {}, i = 0, r = t.length; i < r; i++)
                    for (var o = t[i].joints, l = 0, c = o.length; l < c; l++)
                        e[o[l]].isBone = !0;
                for (var u = 0, d = e.length; u < d; u++) {
                    var m = e[u];
                    void 0 !== m.mesh && (void 0 === a[m.mesh] && (a[m.mesh] = s[m.mesh] = 0),
                    a[m.mesh]++,
                    void 0 !== m.skin && (n[m.mesh].isSkinnedMesh = !0))
                }
                this.json.meshReferences = a,
                this.json.meshUses = s
            }
            ,
            F.prototype.getDependency = function(e, t) {
                var a = e + ":" + t
                  , s = this.cache.get(a);
                if (!s) {
                    switch (e) {
                    case "scene":
                        s = this.loadScene(t);
                        break;
                    case "node":
                        s = this.loadNode(t);
                        break;
                    case "mesh":
                        s = this.loadMesh(t);
                        break;
                    case "accessor":
                        s = this.loadAccessor(t);
                        break;
                    case "bufferView":
                        s = this.loadBufferView(t);
                        break;
                    case "buffer":
                        s = this.loadBuffer(t);
                        break;
                    case "material":
                        s = this.loadMaterial(t);
                        break;
                    case "texture":
                        s = this.loadTexture(t);
                        break;
                    case "skin":
                        s = this.loadSkin(t);
                        break;
                    case "animation":
                        s = this.loadAnimation(t);
                        break;
                    case "camera":
                        s = this.loadCamera(t);
                        break;
                    case "light":
                        s = this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                        break;
                    default:
                        throw new Error("Unknown type: " + e)
                    }
                    this.cache.add(a, s)
                }
                return s
            }
            ,
            F.prototype.getDependencies = function(e) {
                var t = this.cache.get(e);
                if (!t) {
                    var n = this
                      , a = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                    t = Xt.a.all(a.map(function(t, a) {
                        return n.getDependency(e, a)
                    })),
                    this.cache.add(e, t)
                }
                return t
            }
            ,
            F.prototype.getMultiDependencies = function(e) {
                for (var t = {}, n = [], a = 0, s = e.length; a < s; a++) {
                    var i = e[a]
                      , r = this.getDependencies(i);
                    r = r.then(function(e, n) {
                        t[e] = n
                    }
                    .bind(this, i + ("mesh" === i ? "es" : "s"))),
                    n.push(r)
                }
                return Xt.a.all(n).then(function() {
                    return t
                })
            }
            ,
            F.prototype.loadBuffer = function(e) {
                var t = this.json.buffers[e]
                  , a = this.fileLoader;
                if (t.type && "arraybuffer" !== t.type)
                    throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                if (void 0 === t.uri && 0 === e)
                    return Xt.a.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
                var s = this.options;
                return new Xt.a(function(e, n) {
                    a.load(M(t.uri, s.path), e, void 0, function() {
                        n(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                    })
                }
                )
            }
            ,
            F.prototype.loadBufferView = function(e) {
                var t = this.json.bufferViews[e];
                return this.getDependency("buffer", t.buffer).then(function(e) {
                    var n = t.byteLength || 0
                      , a = t.byteOffset || 0;
                    return e.slice(a, a + n)
                })
            }
            ,
            F.prototype.loadAccessor = function(e) {
                var t = this
                  , n = this.json
                  , a = this.json.accessors[e];
                if (void 0 === a.bufferView && void 0 === a.sparse)
                    return Xt.a.resolve(null);
                var s = [];
                return void 0 !== a.bufferView ? s.push(this.getDependency("bufferView", a.bufferView)) : s.push(null),
                void 0 !== a.sparse && (s.push(this.getDependency("bufferView", a.sparse.indices.bufferView)),
                s.push(this.getDependency("bufferView", a.sparse.values.bufferView))),
                Xt.a.all(s).then(function(e) {
                    var s, i, r = e[0], o = v[a.type], l = f[a.componentType], c = l.BYTES_PER_ELEMENT, u = c * o, d = a.byteOffset || 0, m = void 0 !== a.bufferView ? n.bufferViews[a.bufferView].byteStride : void 0, h = !0 === a.normalized;
                    if (m && m !== u) {
                        var p = "InterleavedBuffer:" + a.bufferView + ":" + a.componentType
                          , A = t.cache.get(p);
                        A || (s = new l(r),
                        A = new S["H"](s,m / c),
                        t.cache.add(p, A)),
                        i = new S["I"](A,o,d / c,h)
                    } else
                        s = null === r ? new l(a.count * o) : new l(r,d,a.count * o),
                        i = new S["i"](s,o,h);
                    if (void 0 !== a.sparse) {
                        var g = v.SCALAR
                          , b = f[a.sparse.indices.componentType]
                          , x = a.sparse.indices.byteOffset || 0
                          , y = a.sparse.values.byteOffset || 0
                          , w = new b(e[1],x,a.sparse.count * g)
                          , C = new l(e[2],y,a.sparse.count * o);
                        null !== r && i.setArray(i.array.slice());
                        for (var M = 0, _ = w.length; M < _; M++) {
                            var T = w[M];
                            if (i.setX(T, C[M * o]),
                            o >= 2 && i.setY(T, C[M * o + 1]),
                            o >= 3 && i.setZ(T, C[M * o + 2]),
                            o >= 4 && i.setW(T, C[M * o + 3]),
                            o >= 5)
                                throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                        }
                    }
                    return i
                })
            }
            ,
            F.prototype.loadTexture = function(e) {
                var t, a = this, s = this.json, i = this.options, r = this.textureLoader, o = window.URL || window.webkitURL, l = s.textures[e], c = l.extensions || {};
                t = c[n.MSFT_TEXTURE_DDS] ? s.images[c[n.MSFT_TEXTURE_DDS].source] : s.images[l.source];
                var u = t.uri
                  , d = !1;
                return void 0 !== t.bufferView && (u = a.getDependency("bufferView", t.bufferView).then(function(e) {
                    d = !0;
                    var n = new Blob([e],{
                        type: t.mimeType
                    });
                    return u = o.createObjectURL(n),
                    u
                })),
                Xt.a.resolve(u).then(function(e) {
                    var t = S["W"].Handlers.get(e);
                    return t || (t = c[n.MSFT_TEXTURE_DDS] ? a.extensions[n.MSFT_TEXTURE_DDS].ddsLoader : r),
                    new Xt.a(function(n, a) {
                        t.load(M(e, i.path), n, void 0, a)
                    }
                    )
                }).then(function(e) {
                    !0 === d && o.revokeObjectURL(u),
                    e.flipY = !1,
                    void 0 !== l.name && (e.name = l.name),
                    t.mimeType in C && (e.format = C[t.mimeType]);
                    var n = s.samplers || {}
                      , a = n[l.sampler] || {};
                    return e.magFilter = A[a.magFilter] || S["T"],
                    e.minFilter = A[a.minFilter] || S["U"],
                    e.wrapS = g[a.wrapS] || S["Fb"],
                    e.wrapT = g[a.wrapT] || S["Fb"],
                    e
                })
            }
            ,
            F.prototype.assignTexture = function(e, t, a) {
                var s = this;
                return this.getDependency("texture", a.index).then(function(i) {
                    if (s.extensions[n.KHR_TEXTURE_TRANSFORM]) {
                        var r = void 0 !== a.extensions ? a.extensions[n.KHR_TEXTURE_TRANSFORM] : void 0;
                        r && (i = s.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(i, r))
                    }
                    e[t] = i
                })
            }
            ,
            F.prototype.loadMaterial = function(e) {
                var t, a = this, s = this.json, i = this.extensions, r = s.materials[e], o = {}, l = r.extensions || {}, c = [];
                if (l[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                    var u = i[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                    t = u.getMaterialType(r),
                    c.push(u.extendParams(o, r, a))
                } else if (l[n.KHR_MATERIALS_UNLIT]) {
                    var d = i[n.KHR_MATERIALS_UNLIT];
                    t = d.getMaterialType(r),
                    c.push(d.extendParams(o, r, a))
                } else {
                    t = S["eb"];
                    var m = r.pbrMetallicRoughness || {};
                    if (o.color = new S["o"](1,1,1),
                    o.opacity = 1,
                    ne()(m.baseColorFactor)) {
                        var h = m.baseColorFactor;
                        o.color.fromArray(h),
                        o.opacity = h[3]
                    }
                    void 0 !== m.baseColorTexture && c.push(a.assignTexture(o, "map", m.baseColorTexture)),
                    o.metalness = void 0 !== m.metallicFactor ? m.metallicFactor : 1,
                    o.roughness = void 0 !== m.roughnessFactor ? m.roughnessFactor : 1,
                    void 0 !== m.metallicRoughnessTexture && (c.push(a.assignTexture(o, "metalnessMap", m.metallicRoughnessTexture)),
                    c.push(a.assignTexture(o, "roughnessMap", m.metallicRoughnessTexture)))
                }
                !0 === r.doubleSided && (o.side = S["v"]);
                var p = r.alphaMode || w.OPAQUE;
                return p === w.BLEND ? o.transparent = !0 : (o.transparent = !1,
                p === w.MASK && (o.alphaTest = void 0 !== r.alphaCutoff ? r.alphaCutoff : .5)),
                void 0 !== r.normalTexture && t !== S["db"] && (c.push(a.assignTexture(o, "normalMap", r.normalTexture)),
                o.normalScale = new S["Xb"](1,1),
                void 0 !== r.normalTexture.scale && o.normalScale.set(r.normalTexture.scale, r.normalTexture.scale)),
                void 0 !== r.occlusionTexture && t !== S["db"] && (c.push(a.assignTexture(o, "aoMap", r.occlusionTexture)),
                void 0 !== r.occlusionTexture.strength && (o.aoMapIntensity = r.occlusionTexture.strength)),
                void 0 !== r.emissiveFactor && t !== S["db"] && (o.emissive = (new S["o"]).fromArray(r.emissiveFactor)),
                void 0 !== r.emissiveTexture && t !== S["db"] && c.push(a.assignTexture(o, "emissiveMap", r.emissiveTexture)),
                Xt.a.all(c).then(function() {
                    var e;
                    return e = t === S["Jb"] ? i[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new t(o),
                    void 0 !== r.name && (e.name = r.name),
                    e.normalScale && (e.normalScale.y = -e.normalScale.y),
                    e.map && (e.map.encoding = S["gc"]),
                    e.emissiveMap && (e.emissiveMap.encoding = S["gc"]),
                    e.specularMap && (e.specularMap.encoding = S["gc"]),
                    L(e, r),
                    r.extensions && T(i, e, r),
                    e
                })
            }
            ,
            F.prototype.loadGeometries = function(e) {
                var t, a = this, s = this.extensions, i = this.primitiveCache, r = B(e);
                function o(e) {
                    return s[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, a).then(function(t) {
                        return U(t, e, a)
                    })
                }
                r && (t = e,
                e = [e[0]]);
                for (var l = [], c = 0, u = e.length; c < u; c++) {
                    var d, m = e[c], h = D(i, m);
                    if (h)
                        l.push(h);
                    else
                        d = m.extensions && m.extensions[n.KHR_DRACO_MESH_COMPRESSION] ? o(m) : U(new S["j"], m, a),
                        i.push({
                            primitive: m,
                            promise: d
                        }),
                        l.push(d)
                }
                return Xt.a.all(l).then(function(n) {
                    if (r) {
                        var s = n[0]
                          , i = a.multiPassGeometryCache
                          , o = R(i, s, t);
                        if (null !== o)
                            return [o.geometry];
                        var l = new S["j"];
                        for (var c in l.name = s.name,
                        l.userData = s.userData,
                        s.attributes)
                            l.addAttribute(c, s.attributes[c]);
                        for (var c in s.morphAttributes)
                            l.morphAttributes[c] = s.morphAttributes[c];
                        for (var u = [], d = 0, m = t.length; d < m; d++)
                            u.push(a.getDependency("accessor", t[d].indices));
                        return Xt.a.all(u).then(function(e) {
                            for (var n = [], a = 0, r = 0, o = t.length; r < o; r++) {
                                for (var c = e[r], u = 0, d = c.count; u < d; u++)
                                    n.push(c.array[u]);
                                l.addGroup(a, c.count, r),
                                a += c.count
                            }
                            return l.setIndex(n),
                            i.push({
                                geometry: l,
                                baseGeometry: s,
                                primitives: t
                            }),
                            [l]
                        })
                    }
                    if (n.length > 1 && void 0 !== S["BufferGeometryUtils"]) {
                        for (d = 1,
                        m = e.length; d < m; d++)
                            if (e[0].mode !== e[d].mode)
                                return n;
                        i = a.multiplePrimitivesCache,
                        o = z(i, n);
                        if (o) {
                            if (null !== o.geometry)
                                return [o.geometry]
                        } else {
                            l = S["BufferGeometryUtils"].mergeBufferGeometries(n, !0);
                            if (i.push({
                                geometry: l,
                                baseGeometries: n
                            }),
                            null !== l)
                                return [l]
                        }
                    }
                    return n
                })
            }
            ,
            F.prototype.loadMesh = function(e) {
                for (var t = this, a = this.json, s = this.extensions, i = a.meshes[e], r = i.primitives, o = [], l = 0, c = r.length; l < c; l++) {
                    var u = void 0 === r[l].material ? _() : this.getDependency("material", r[l].material);
                    o.push(u)
                }
                return Xt.a.all(o).then(function(a) {
                    return t.loadGeometries(r).then(function(o) {
                        for (var l = 1 === o.length && o[0].groups.length > 0, c = [], u = 0, d = o.length; u < d; u++) {
                            var m, h = o[u], f = r[u], A = l ? a : a[u];
                            if (f.mode === p.TRIANGLES || f.mode === p.TRIANGLE_STRIP || f.mode === p.TRIANGLE_FAN || void 0 === f.mode)
                                m = !0 === i.isSkinnedMesh ? new S["Lb"](h,A) : new S["cb"](h,A),
                                !0 === m.isSkinnedMesh && m.normalizeSkinWeights(),
                                f.mode === p.TRIANGLE_STRIP ? m.drawMode = S["Ub"] : f.mode === p.TRIANGLE_FAN && (m.drawMode = S["Tb"]);
                            else if (f.mode === p.LINES)
                                m = new S["S"](h,A);
                            else if (f.mode === p.LINE_STRIP)
                                m = new S["P"](h,A);
                            else if (f.mode === p.LINE_LOOP)
                                m = new S["R"](h,A);
                            else {
                                if (f.mode !== p.POINTS)
                                    throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
                                m = new S["yb"](h,A)
                            }
                            I()(m.geometry.morphAttributes).length > 0 && P(m, i),
                            m.name = i.name || "mesh_" + e,
                            o.length > 1 && (m.name += "_" + u),
                            L(m, i),
                            c.push(m);
                            for (var g = l ? m.material : [m.material], v = void 0 !== h.attributes.color, b = void 0 === h.attributes.normal, x = !0 === m.isSkinnedMesh, y = I()(h.morphAttributes).length > 0, w = y && void 0 !== h.morphAttributes.normal, C = 0, M = g.length; C < M; C++) {
                                A = g[C];
                                if (m.isPoints) {
                                    var _ = "PointsMaterial:" + A.uuid
                                      , T = t.cache.get(_);
                                    T || (T = new S["zb"],
                                    S["Y"].prototype.copy.call(T, A),
                                    T.color.copy(A.color),
                                    T.map = A.map,
                                    T.lights = !1,
                                    t.cache.add(_, T)),
                                    A = T
                                } else if (m.isLine) {
                                    _ = "LineBasicMaterial:" + A.uuid;
                                    var E = t.cache.get(_);
                                    E || (E = new S["Q"],
                                    S["Y"].prototype.copy.call(E, A),
                                    E.color.copy(A.color),
                                    E.lights = !1,
                                    t.cache.add(_, E)),
                                    A = E
                                }
                                if (v || b || x || y) {
                                    _ = "ClonedMaterial:" + A.uuid + ":";
                                    A.isGLTFSpecularGlossinessMaterial && (_ += "specular-glossiness:"),
                                    x && (_ += "skinning:"),
                                    v && (_ += "vertex-colors:"),
                                    b && (_ += "flat-shading:"),
                                    y && (_ += "morph-targets:"),
                                    w && (_ += "morph-normals:");
                                    var j = t.cache.get(_);
                                    j || (j = A.isGLTFSpecularGlossinessMaterial ? s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(A) : A.clone(),
                                    x && (j.skinning = !0),
                                    v && (j.vertexColors = S["bc"]),
                                    b && (j.flatShading = !0),
                                    y && (j.morphTargets = !0),
                                    w && (j.morphNormals = !0),
                                    t.cache.add(_, j)),
                                    A = j
                                }
                                g[C] = A,
                                A.aoMap && void 0 === h.attributes.uv2 && void 0 !== h.attributes.uv && (console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."),
                                h.addAttribute("uv2", new S["i"](h.attributes.uv.array,2))),
                                A.isGLTFSpecularGlossinessMaterial && (m.onBeforeRender = s[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms)
                            }
                            m.material = l ? g : g[0]
                        }
                        if (1 === c.length)
                            return c[0];
                        var O = new S["G"];
                        for (u = 0,
                        d = c.length; u < d; u++)
                            O.add(c[u]);
                        return O
                    })
                })
            }
            ,
            F.prototype.loadCamera = function(e) {
                var t, n = this.json.cameras[e], a = n[n.type];
                if (a)
                    return "perspective" === n.type ? t = new S["ub"](S["Z"].radToDeg(a.yfov),a.aspectRatio || 1,a.znear || 1,a.zfar || 2e6) : "orthographic" === n.type && (t = new S["sb"](a.xmag / -2,a.xmag / 2,a.ymag / 2,a.ymag / -2,a.znear,a.zfar)),
                    void 0 !== n.name && (t.name = n.name),
                    L(t, n),
                    Xt.a.resolve(t);
                console.warn("THREE.GLTFLoader: Missing camera parameters.")
            }
            ,
            F.prototype.loadSkin = function(e) {
                var t = this.json.skins[e]
                  , n = {
                    joints: t.joints
                };
                return void 0 === t.inverseBindMatrices ? Xt.a.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(e) {
                    return n.inverseBindMatrices = e,
                    n
                })
            }
            ,
            F.prototype.loadAnimation = function(e) {
                for (var t = this.json, n = t.animations[e], a = [], s = [], i = [], r = [], o = [], l = 0, c = n.channels.length; l < c; l++) {
                    var u = n.channels[l]
                      , d = n.samplers[u.sampler]
                      , m = u.target
                      , p = void 0 !== m.node ? m.node : m.id
                      , f = void 0 !== n.parameters ? n.parameters[d.input] : d.input
                      , A = void 0 !== n.parameters ? n.parameters[d.output] : d.output;
                    a.push(this.getDependency("node", p)),
                    s.push(this.getDependency("accessor", f)),
                    i.push(this.getDependency("accessor", A)),
                    r.push(d),
                    o.push(m)
                }
                return Xt.a.all([Xt.a.all(a), Xt.a.all(s), Xt.a.all(i), Xt.a.all(r), Xt.a.all(o)]).then(function(t) {
                    for (var a = t[0], s = t[1], i = t[2], r = t[3], o = t[4], l = [], c = 0, u = a.length; c < u; c++) {
                        var d = a[c]
                          , m = s[c]
                          , p = i[c]
                          , f = r[c]
                          , A = o[c];
                        if (void 0 !== d) {
                            var g;
                            switch (d.updateMatrix(),
                            d.matrixAutoUpdate = !0,
                            x[A.path]) {
                            case x.weights:
                                g = S["lb"];
                                break;
                            case x.rotation:
                                g = S["Cb"];
                                break;
                            case x.position:
                            case x.scale:
                            default:
                                g = S["ac"];
                                break
                            }
                            var v = d.name ? d.name : d.uuid
                              , b = void 0 !== f.interpolation ? y[f.interpolation] : S["L"]
                              , w = [];
                            x[A.path] === x.weights ? d.traverse(function(e) {
                                !0 === e.isMesh && e.morphTargetInfluences && w.push(e.name ? e.name : e.uuid)
                            }) : w.push(v);
                            for (var C = 0, M = w.length; C < M; C++) {
                                var _ = new g(w[C] + "." + x[A.path],S["e"].arraySlice(m.array, 0),S["e"].arraySlice(p.array, 0),b);
                                "CUBICSPLINE" === f.interpolation && (_.createInterpolant = function(e) {
                                    return new h(this.times,this.values,this.getValueSize() / 3,e)
                                }
                                ,
                                _.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0),
                                l.push(_)
                            }
                        }
                    }
                    var T = void 0 !== n.name ? n.name : "animation_" + e;
                    return new S["d"](T,void 0,l)
                })
            }
            ,
            F.prototype.loadNode = function(e) {
                var t = this.json
                  , a = this.extensions
                  , s = this
                  , i = t.meshReferences
                  , r = t.meshUses
                  , o = t.nodes[e];
                return function() {
                    return !0 === o.isBone ? Xt.a.resolve(new S["g"]) : void 0 !== o.mesh ? s.getDependency("mesh", o.mesh).then(function(e) {
                        var t;
                        if (i[o.mesh] > 1) {
                            var n = r[o.mesh]++;
                            t = e.clone(),
                            t.name += "_instance_" + n,
                            t.onBeforeRender = e.onBeforeRender;
                            for (var a = 0, s = t.children.length; a < s; a++)
                                t.children[a].name += "_instance_" + n,
                                t.children[a].onBeforeRender = e.children[a].onBeforeRender
                        } else
                            t = e;
                        return void 0 !== o.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (var t = 0, n = o.weights.length; t < n; t++)
                                    e.morphTargetInfluences[t] = o.weights[t]
                        }),
                        t
                    }) : void 0 !== o.camera ? s.getDependency("camera", o.camera) : o.extensions && o.extensions[n.KHR_LIGHTS_PUNCTUAL] && void 0 !== o.extensions[n.KHR_LIGHTS_PUNCTUAL].light ? s.getDependency("light", o.extensions[n.KHR_LIGHTS_PUNCTUAL].light) : Xt.a.resolve(new S["mb"])
                }().then(function(e) {
                    if (void 0 !== o.name && (e.name = S["Ab"].sanitizeNodeName(o.name)),
                    L(e, o),
                    o.extensions && T(a, e, o),
                    void 0 !== o.matrix) {
                        var t = new S["bb"];
                        t.fromArray(o.matrix),
                        e.applyMatrix(t)
                    } else
                        void 0 !== o.translation && e.position.fromArray(o.translation),
                        void 0 !== o.rotation && e.quaternion.fromArray(o.rotation),
                        void 0 !== o.scale && e.scale.fromArray(o.scale);
                    return e
                })
            }
            ,
            F.prototype.loadScene = function() {
                function e(t, n, a, s) {
                    var i = a.nodes[t];
                    return s.getDependency("node", t).then(function(e) {
                        return void 0 === i.skin ? e : s.getDependency("skin", i.skin).then(function(e) {
                            t = e;
                            for (var n = [], a = 0, i = t.joints.length; a < i; a++)
                                n.push(s.getDependency("node", t.joints[a]));
                            return Xt.a.all(n)
                        }).then(function(n) {
                            for (var a = !0 === e.isGroup ? e.children : [e], s = 0, i = a.length; s < i; s++) {
                                for (var r = a[s], o = [], l = [], c = 0, u = n.length; c < u; c++) {
                                    var d = n[c];
                                    if (d) {
                                        o.push(d);
                                        var m = new S["bb"];
                                        void 0 !== t.inverseBindMatrices && m.fromArray(t.inverseBindMatrices.array, 16 * c),
                                        l.push(m)
                                    } else
                                        console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c])
                                }
                                r.bind(new S["Kb"](o,l), r.matrixWorld)
                            }
                            return e
                        });
                        var t
                    }).then(function(t) {
                        n.add(t);
                        var r = [];
                        if (i.children)
                            for (var o = i.children, l = 0, c = o.length; l < c; l++) {
                                var u = o[l];
                                r.push(e(u, t, a, s))
                            }
                        return Xt.a.all(r)
                    })
                }
                return function(t) {
                    var n = this.json
                      , a = this.extensions
                      , s = this.json.scenes[t]
                      , i = this
                      , r = new S["Hb"];
                    void 0 !== s.name && (r.name = s.name),
                    L(r, s),
                    s.extensions && T(a, r, s);
                    for (var o = s.nodes || [], l = [], c = 0, u = o.length; c < u; c++)
                        l.push(e(o[c], r, n, i));
                    return Xt.a.all(l).then(function() {
                        return r
                    })
                }
            }(),
            e
        }();
        var As = S["GLTFLoader"]
          , gs = n("056b")
          , vs = n.n(gs);
        $t.addToProgress(6);
        var bs = function(e) {
            function t(e, n, a) {
                var s;
                return Object(v["a"])(this, t),
                s = Object(L["a"])(this, Object(E["a"])(t).call(this, e, n, a, "Dam")),
                s.initMeshData(),
                s.initLight(s.scene),
                s.loadModels(),
                s
            }
            return Object(j["a"])(t, e),
            Object(b["a"])(t, [{
                key: "initCamera",
                value: function(e, n) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initCamera", this).call(this, e, n),
                    this.cameras.controlsAmplitudes.defaultX = .8,
                    this.cameras.controlsAmplitudes.defaultY = .1,
                    this.cameras.controlsAmplitudes.dirX.set(1, 0, 1),
                    this.cameras.controlsAmplitudes.dirY.set(0, 1, 0)
                }
            }, {
                key: "initMeshData",
                value: function() {
                    var e = Ma()
                      , t = _a()
                      , n = Ia()
                      , a = Da()
                      , s = za(!0)
                      , i = za()
                      , r = wa()
                      , o = Ca()
                      , l = Ca()
                      , c = Ca()
                      , u = Sa()
                      , d = Pa()
                      , m = Oa(0, [0, .01])
                      , h = Oa(1, [0, .021])
                      , p = Oa(2, [0, .032]);
                    u.uniforms.uZDeform.value.set(-330, .0093),
                    u.uniforms.uDisplace.value = -.0025,
                    this.initDarker([e, o, l, c]);
                    var f = fs.createMeshDataStruct;
                    this.meshesData = [f("default", this.defaultContent, Ua(e)), f("yellow", this.defaultContent, Ua(n)), f("blue", this.defaultContent, Ua(a)), f("car9", this.defaultContent, Ua(e)), f("water", this.defaultContent, Ua(s, {
                        castShadow: !1,
                        receiveShadow: !1,
                        renderOrder: this.defaultContent.renderOrder + 1
                    })), f("cloud1", this.defaultContent, Ua(m, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 2
                    }), f("cloud2", this.defaultContent, Ua(h, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 3
                    }), f("cloud3", this.defaultContent, Ua(p, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 4
                    }), f("default", this.cubeContent, Ua(t)), f("yellow", this.cubeContent, Ua(n)), f("blue", this.cubeContent, Ua(a)), f("water", this.cubeContent, Ua(i, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), f("ground01", this.cubeContent, Ua(o)), f("ground02", this.cubeContent, Ua(l)), f("ground03", this.cubeContent, Ua(c)), f("shadow", this.cubeContent, Ua(r, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.cubeContent.renderOrder - 1
                    }), f("default", this.blueprintContent, Ua(d, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), f("default", this.xraysContent, Ua(u, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), f("targetCam", this.targetContent, Ua(e))],
                    this.unmeshesData = [f("targetcamera_1", this.targetContent), f("targetcamera_2", this.targetContent), f("targetcamera_3", this.targetContent), f("targetcamera_4", this.targetContent), f("targetcamera_5", this.targetContent), f("targetcamera_6", this.targetContent), f("targetcamera_7", this.targetContent), f("craneInstance", this.defaultContent), f("craneTransform", this.defaultContent), f("blockInstance", this.defaultContent), f("blockTransform", this.defaultContent), f("Cube1Instance", this.defaultContent), f("Cube1Transform", this.defaultContent), f("CubeInstance", this.defaultContent), f("cubeTransform", this.defaultContent), f("House2Instance", this.defaultContent), f("House2Transform", this.defaultContent), f("StructureInstance", this.defaultContent), f("StructureTransform", this.defaultContent), f("supportInstance", this.defaultContent), f("supportTransform", this.defaultContent), f("craneInstance", this.cubeContent), f("craneTransform", this.cubeContent), f("Cube1Instance", this.cubeContent), f("Cube1Transform", this.cubeContent), f("CubeInstance", this.cubeContent), f("cubeTransform", this.cubeContent), f("House2Instance", this.cubeContent), f("House2Transform", this.cubeContent), f("StructureInstance", this.cubeContent), f("StructureTransform", this.cubeContent), f("supportInstance", this.cubeContent), f("supportTransform", this.cubeContent), f("craneInstance", this.blueprintContent), f("craneTransform", this.blueprintContent), f("Cube1Instance", this.blueprintContent), f("Cube1Transform", this.blueprintContent), f("CubeInstance", this.blueprintContent), f("cubeTransform", this.blueprintContent), f("House2Instance", this.blueprintContent), f("House2Transform", this.blueprintContent), f("StructureInstance", this.blueprintContent), f("StructureTransform", this.blueprintContent), f("supportInstance", this.blueprintContent), f("supportTransform", this.blueprintContent), f("craneInstance", this.xraysContent), f("craneTransform", this.xraysContent), f("Cube1Instance", this.xraysContent), f("Cube1Transform", this.xraysContent), f("CubeInstance", this.xraysContent), f("cubeTransform", this.xraysContent), f("House2Instance", this.xraysContent), f("House2Transform", this.xraysContent), f("StructureInstance", this.xraysContent), f("StructureTransform", this.xraysContent), f("supportInstance", this.xraysContent), f("supportTransform", this.xraysContent)]
                }
            }, {
                key: "initLight",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initLight", this).call(this, e);
                    var n = new S["Yb"](-.65,-1.4,-2.1);
                    this.lights[0].position.set(-.4, 1, 3),
                    this.lights[0].target.position.fromArray(this.lights[0].position.toArray()).add(n),
                    this.lights[0].shadow.camera.bottom = -1,
                    this.lights[0].shadow.camera.top = 1,
                    this.lights[0].shadow.camera.left = -3,
                    this.lights[0].shadow.camera.right = 4,
                    this.lights[0].shadow.camera.far = 4,
                    this.lights[0].shadow.mapSize.height /= 2,
                    this.lights[1].position.set(-.8, .5, 1.5),
                    this.lights[1].target.position.fromArray(this.lights[1].position.toArray()).add(n),
                    this.lights[1].shadow.camera.bottom = -1,
                    this.lights[1].shadow.camera.top = 1,
                    this.lights[1].shadow.camera.left = -1,
                    this.lights[1].shadow.camera.right = 1,
                    this.lights[1].shadow.camera.near = .1,
                    this.lights[1].shadow.camera.far = 2
                }
            }, {
                key: "onLoad",
                value: function(e) {
                    var t = this;
                    e.scene.updateMatrixWorld(!0),
                    this.setCameras(e.cameras, {
                        near: .1,
                        far: 1e3
                    }),
                    Vt(function() {
                        var n = g()();
                        t.sortMeshes(t.getMesh("state1", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.getMeshData("default", t.defaultContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state2", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.getMeshData("default", t.cubeContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.getMeshData("default", t.blueprintContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene).clone(), t.meshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.getMeshData("default", t.xraysContent, t.meshesData)),
                        t.cameras.setTargets([t.getMesh("targetcamera_1", e.scene).position, t.getMesh("targetcamera_2", e.scene).position, t.getMesh("targetcamera_3", e.scene).position, t.getMesh("targetcamera_4", e.scene).position, t.getMesh("targetcamera_5", e.scene).position, t.getMesh("targetcamera_6", e.scene).position, t.getMesh("targetcamera_7", e.scene).position]),
                        console.log("%cModel " + t.name + " sort meshes time: %c" + (g()() - n) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.defaultContent),
                        t.mergeMesh("yellow", t.defaultContent),
                        t.mergeMesh("water", t.defaultContent),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "blockInstance", "blockTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "Cube1Instance", "Cube1Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "CubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "House2Instance", "House2Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "StructureInstance", "StructureTransform"),
                        t.cloneMoveMergeMesh("blue", t.defaultContent, "supportInstance", "supportTransform"),
                        t.cloneMoveMergeMesh("yellow", t.defaultContent, "craneInstance", "craneTransform"),
                        t.cloneMoveMergeMesh("yellow", t.defaultContent, "craneInstance", "craneTransform"),
                        t.mergeMesh("cloud1", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud2", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud3", t.defaultContent, {
                            uv: !0
                        }),
                        console.log("%cModel " + t.name + " merge default time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.cubeContent),
                        t.mergeMesh("yellow", t.cubeContent),
                        t.mergeMesh("shadow", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("water", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground01", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground02", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground03", t.cubeContent, {
                            uv: !0
                        }),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "Cube1Instance", "Cube1Transform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "CubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "House2Instance", "House2Transform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "StructureInstance", "StructureTransform"),
                        t.cloneMoveMergeMesh("blue", t.cubeContent, "supportInstance", "supportTransform"),
                        t.cloneMoveMergeMesh("yellow", t.cubeContent, "craneInstance", "craneTransform"),
                        console.log("%cModel " + t.name + " merge cube time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.blueprintContent),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "Cube1Instance", "Cube1Transform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "CubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "House2Instance", "House2Transform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "StructureInstance", "StructureTransform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "supportInstance", "supportTransform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "craneInstance", "craneTransform"),
                        t.blueprintMesh(t.blueprintContent),
                        console.log("%cModel " + t.name + " merge blueprint time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.xraysContent),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "Cube1Instance", "Cube1Transform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "CubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "House2Instance", "House2Transform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "StructureInstance", "StructureTransform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "supportInstance", "supportTransform"),
                        t.xrayMesh(t.xraysContent),
                        console.log("%cModel " + t.name + " merge x-rays time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        t.modelLoaded(),
                        t.wireframeCubeFactor = .125,
                        t.initWireframeCube(),
                        t.initWireframeTransition(),
                        $t.removeToProgress(1)
                    })
                }
            }, {
                key: "loadModels",
                value: function() {
                    var e = new As
                      , t = function() {
                        return 0
                    }
                      , n = function(e) {
                        return console.error("Model load error: " + e)
                    };
                    e.load(vs.a, this.onLoad.bind(this), t, n)
                }
            }, {
                key: "tick",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "tick", this).call(this, e);
                    var n = e / 1e3
                      , a = !0
                      , s = !1
                      , i = void 0;
                    try {
                        for (var r, o = f()(this.meshesData); !(a = (r = o.next()).done); a = !0) {
                            var l = r.value;
                            l.mesh.material.uniforms && l.mesh.material.uniforms.time && (l.mesh.material.uniforms.time.value = n)
                        }
                    } catch (c) {
                        s = !0,
                        i = c
                    } finally {
                        try {
                            a || null == o.return || o.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    Object(P["a"])(Object(E["a"])(t.prototype), "dispose", this).call(this)
                }
            }]),
            t
        }(fs)
          , xs = n("760f")
          , ys = n.n(xs);
        $t.addToProgress(6);
        var ws = function(e) {
            function t(e, n, a) {
                var s;
                return Object(v["a"])(this, t),
                s = Object(L["a"])(this, Object(E["a"])(t).call(this, e, n, a, "Island")),
                s.lu = 0,
                s.dt = 0,
                s.initMeshData(),
                s.initLight(s.scene),
                s.loadModels(),
                s
            }
            return Object(j["a"])(t, e),
            Object(b["a"])(t, [{
                key: "initCamera",
                value: function(e, n) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initCamera", this).call(this, e, n),
                    this.cameras.controlsAmplitudes.defaultX = 1,
                    this.cameras.controlsAmplitudes.defaultY = .1,
                    this.cameras.controlsAmplitudes.dirX.set(1, 0, 1),
                    this.cameras.controlsAmplitudes.dirY.set(0, 1, 0)
                }
            }, {
                key: "initMeshData",
                value: function() {
                    var e = Ma()
                      , t = _a()
                      , n = Ia()
                      , a = za(!0)
                      , s = za()
                      , i = wa()
                      , r = Ca()
                      , o = Ca()
                      , l = Ca()
                      , c = Sa()
                      , u = Pa()
                      , d = Oa(0, [0, .01])
                      , m = Oa(1, [0, .021])
                      , h = Oa(2, [0, .032]);
                    c.uniforms.uZDeform.value.set(-322, .01),
                    c.uniforms.uDisplace.value = -.002,
                    this.initDarker([e, r, o, l]);
                    var p = fs.createMeshDataStruct;
                    this.meshesData = [p("default", this.defaultContent, Ua(e)), p("red", this.defaultContent, Ua(n)), p("water", this.defaultContent, Ua(a, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), p("cloud1", this.defaultContent, Ua(d, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 1
                    }), p("cloud2", this.defaultContent, Ua(m, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 2
                    }), p("cloud3", this.defaultContent, Ua(h, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 3
                    }), p("boat1", this.defaultContent, Ua(e, {
                        castShadow: !0,
                        receiveShadow: !0,
                        matrixAutoUpdate: !0
                    })), p("boat3", this.defaultContent, Ua(e, {
                        castShadow: !0,
                        receiveShadow: !0,
                        matrixAutoUpdate: !0
                    })), p("default", this.cubeContent, Ua(t)), p("red", this.cubeContent, Ua(n)), p("water", this.cubeContent, Ua(s, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), p("ground01", this.cubeContent, Ua(r)), p("ground02", this.cubeContent, Ua(o)), p("ground03", this.cubeContent, Ua(l)), p("shadow", this.cubeContent, Ua(i, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.cubeContent.renderOrder - 1
                    }), p("default", this.blueprintContent, Ua(u, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), p("default", this.xraysContent, Ua(c, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), p("targetCam", this.targetContent, Ua(e))],
                    this.unmeshesData = [p("targetCamera1", this.targetContent), p("targetCamera2", this.targetContent), p("targetCamera3", this.targetContent), p("targetCamera4", this.targetContent), p("targetCamera5", this.targetContent), p("targetCamera6", this.targetContent), p("targetCamera7", this.targetContent), p("containerInstance", this.defaultContent), p("containerTransform", this.defaultContent), p("grueInstance", this.defaultContent), p("grueTransform", this.defaultContent), p("minigInstance", this.defaultContent), p("minigTransform", this.defaultContent), p("boat2Instance", this.defaultContent), p("boat2Transform", this.defaultContent), p("camionInstance", this.defaultContent), p("camionTransform", this.defaultContent), p("cylinderInstance", this.defaultContent), p("cylinderTransform", this.defaultContent), p("grueTransform", this.cubeContent), p("minigTransform", this.cubeContent), p("camionTransform", this.cubeContent), p("grueTransform", this.blueprintContent), p("minigTransform", this.blueprintContent), p("camionTransform", this.blueprintContent)]
                }
            }, {
                key: "initLight",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initLight", this).call(this, e);
                    var n = new S["Yb"](1.3,1,0);
                    this.lights[0].position.add(n),
                    this.lights[0].target.position.add(n),
                    this.lights[0].shadow.camera.bottom = -1,
                    this.lights[0].shadow.camera.top = 1,
                    this.lights[0].shadow.camera.left = -2,
                    this.lights[0].shadow.camera.right = 2,
                    this.lights[0].shadow.camera.far = 5,
                    this.lights[0].shadow.mapSize.height /= 2,
                    n.set(0, .2, -1.5),
                    this.lights[1].position.add(n),
                    this.lights[1].target.position.add(n),
                    this.lights[1].shadow.camera.bottom = -.5,
                    this.lights[1].shadow.camera.top = .5,
                    this.lights[1].shadow.camera.left = -.5,
                    this.lights[1].shadow.camera.right = .5,
                    this.lights[1].shadow.camera.near = .1,
                    this.lights[1].shadow.camera.far = 1.5
                }
            }, {
                key: "onLoad",
                value: function(e) {
                    var t = this;
                    e.scene.updateMatrixWorld(!0),
                    this.setCameras(e.cameras, {
                        near: .1,
                        far: 1e3
                    }),
                    Vt(function() {
                        var n = g()();
                        t.sortMeshes(t.getMesh("state1", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.getMeshData("default", t.defaultContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state2", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.getMeshData("default", t.cubeContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.getMeshData("default", t.blueprintContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene).clone(), t.meshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.getMeshData("default", t.xraysContent, t.meshesData)),
                        t.cameras.setTargets([t.getMesh("targetCamera1", e.scene).position, t.getMesh("targetCamera2", e.scene).position, t.getMesh("targetCamera3", e.scene).position, t.getMesh("targetCamera4", e.scene).position, t.getMesh("targetCamera5", e.scene).position, t.getMesh("targetCamera6", e.scene).position, t.getMesh("targetCamera7", e.scene).position]),
                        console.log("%cModel " + t.name + " sort meshes time: %c" + (g()() - n) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.defaultContent),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "containerInstance", "containerTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "boat2Instance", "boat2Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "camionInstance", "camionTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "cylinderInstance", "cylinderTransform"),
                        t.cloneMoveMergeMesh("red", t.defaultContent, "grueInstance", "grueTransform"),
                        t.cloneMoveMergeMesh("red", t.defaultContent, "minigInstance", "minigTransform"),
                        t.mergeMesh("boat1", t.defaultContent, {
                            bakeFromMatrix: !1
                        }),
                        t.mergeMesh("boat3", t.defaultContent, {
                            bakeFromMatrix: !1
                        }),
                        t.mergeMesh("red", t.defaultContent),
                        t.mergeMesh("water", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud1", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud2", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud3", t.defaultContent, {
                            uv: !0
                        }),
                        console.log("%cModel " + t.name + " merge default time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.cubeContent),
                        t.mergeMesh("red", t.cubeContent),
                        t.mergeMesh("shadow", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("water", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground01", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground02", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground03", t.cubeContent, {
                            uv: !0
                        }),
                        t.cloneMoveMergeMeshFromOther("default", t.defaultContent, "camionInstance", t.cubeContent, "camionTransform"),
                        t.cloneMoveMergeMeshFromOther("red", t.defaultContent, "grueInstance", t.cubeContent, "grueTransform"),
                        t.cloneMoveMergeMeshFromOther("red", t.defaultContent, "minigInstance", t.cubeContent, "minigTransform"),
                        console.log("%cModel " + t.name + " merge cube time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.blueprintContent),
                        t.cloneMoveMergeMeshFromOther("default", t.defaultContent, "camionInstance", t.blueprintContent, "camionTransform"),
                        t.cloneMoveMergeMeshFromOther("default", t.defaultContent, "grueInstance", t.blueprintContent, "grueTransform"),
                        t.cloneMoveMergeMeshFromOther("default", t.defaultContent, "minigInstance", t.blueprintContent, "minigTransform"),
                        t.blueprintMesh(t.blueprintContent),
                        console.log("%cModel " + t.name + " merge blueprint time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.xraysContent),
                        t.xrayMesh(),
                        console.log("%cModel " + t.name + " merge x-rays time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = t.getMeshData("boat1", t.defaultContent).mesh
                          , n = t.getMeshData("boat3", t.defaultContent).mesh
                          , a = e.clone();
                        n.parent.add(a),
                        a.position.x = 3,
                        a.position.z = .5,
                        a.rotation.z = 2.2,
                        a.receiveShadow = !1,
                        a.castShadow = !1,
                        t.boatData = {
                            aBoat1: {
                                mesh: e,
                                rotX: e.rotation.x,
                                posY: e.position.y
                            },
                            aBoat2: {
                                mesh: n,
                                rotX: n.rotation.x,
                                posY: n.position.y
                            },
                            aBoat3: {
                                setPos: function(e) {
                                    var t = e / 1e6 % 1
                                      , n = {
                                        x: -1,
                                        z: -2
                                    }
                                      , s = {
                                        x: 5,
                                        z: 2
                                    };
                                    a.position.x = (s.x - n.x) * t + n.x,
                                    a.position.z = (s.z - n.z) * t + n.z
                                }
                            }
                        },
                        t.modelLoaded(),
                        t.wireframeCubeFactor = .125,
                        t.initWireframeCube(),
                        t.initWireframeTransition(),
                        $t.removeToProgress(1)
                    })
                }
            }, {
                key: "loadModels",
                value: function() {
                    var e = new As
                      , t = function() {
                        return 0
                    }
                      , n = function(e) {
                        return console.error("Model load error: " + e)
                    };
                    e.load(ys.a, this.onLoad.bind(this), t, n)
                }
            }, {
                key: "tick",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "tick", this).call(this, e);
                    var n = e - this.lu;
                    this.lu = e,
                    this.dt += n;
                    var a = e / 1e3
                      , s = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var o, l = f()(this.meshesData); !(s = (o = l.next()).done); s = !0) {
                            var c = o.value;
                            c.mesh.material.uniforms && c.mesh.material.uniforms.time && (c.mesh.material.uniforms.time.value = a)
                        }
                    } catch (u) {
                        i = !0,
                        r = u
                    } finally {
                        try {
                            s || null == l.return || l.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    this.boatData && (this.boatData.aBoat1.mesh.rotation.x = this.boatData.aBoat1.rotX + .025 * Math.sin(.9 * a),
                    this.boatData.aBoat2.mesh.rotation.x = this.boatData.aBoat2.rotX + .025 * Math.sin(1.1 * a),
                    this.boatData.aBoat1.mesh.position.y = this.boatData.aBoat1.posY + .0011 * Math.cos(1.8 * a),
                    this.boatData.aBoat2.mesh.position.y = this.boatData.aBoat2.posY + .0011 * Math.cos(2.2 * a),
                    this.boatData.aBoat3.setPos(4 * this.dt))
                }
            }, {
                key: "dispose",
                value: function() {
                    Object(P["a"])(Object(E["a"])(t.prototype), "dispose", this).call(this)
                }
            }]),
            t
        }(fs)
          , Cs = n("437c")
          , Ms = n.n(Cs);
        $t.addToProgress(6);
        var _s = function(e) {
            function t(e, n, a) {
                var s;
                return Object(v["a"])(this, t),
                s = Object(L["a"])(this, Object(E["a"])(t).call(this, e, n, a, "Museum")),
                s.initMeshData(),
                s.initLight(s.scene),
                s.loadModels(),
                s
            }
            return Object(j["a"])(t, e),
            Object(b["a"])(t, [{
                key: "initCamera",
                value: function(e, n) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initCamera", this).call(this, e, n),
                    this.cameras.controlsAmplitudes.defaultX = 2,
                    this.cameras.controlsAmplitudes.defaultY = .1,
                    this.cameras.controlsAmplitudes.dirX.set(0, 0, 1),
                    this.cameras.controlsAmplitudes.dirY.set(0, 1, 0)
                }
            }, {
                key: "initMeshData",
                value: function() {
                    var e = Ca()
                      , t = Ta()
                      , n = Ia()
                      , a = za(!0)
                      , s = wa()
                      , i = Sa()
                      , r = Ca()
                      , o = new S["db"]({
                        color: new S["o"](728664),
                        transparent: !0,
                        opacity: .2
                    })
                      , l = Pa()
                      , c = Oa(0, [0, .01])
                      , u = Oa(1, [0, .021])
                      , d = Oa(2, [0, .032]);
                    i.uniforms.uZDeform.value.set(-890, .0026),
                    i.uniforms.uDisplace.value = -.009,
                    this.initDarker([e, r]);
                    var m = fs.createMeshDataStruct;
                    this.meshesData = [m("default", this.defaultContent, Ua(e)), m("red", this.defaultContent, Ua(n)), m("car9", this.defaultContent, Ua(e)), m("water", this.defaultContent, Ua(a, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), m("transparent", this.defaultContent, Ua(o, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), m("cloud1", this.defaultContent, Ua(c, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 1
                    }), m("cloud2", this.defaultContent, Ua(u, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 2
                    }), m("cloud3", this.defaultContent, Ua(d, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.defaultContent.renderOrder + 3
                    }), m("default", this.cubeContent, Ua(t)), m("ground2", this.cubeContent, Ua(r)), m("red", this.cubeContent, Ua(n)), m("water", this.cubeContent, Ua(a, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), m("transparent", this.cubeContent, Ua(o, {
                        castShadow: !1,
                        receiveShadow: !1
                    })), m("shadow", this.cubeContent, Ua(s, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.cubeContent.renderOrder - 1
                    }), m("default", this.blueprintContent, Ua(l, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), m("default", this.xraysContent, Ua(i, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), m("targetCam", this.targetContent, Ua(e))],
                    this.unmeshesData = [m("targetCamera1", this.targetContent), m("targetCamera2", this.targetContent), m("targetCamera3", this.targetContent), m("targetCamera4", this.targetContent), m("targetCamera5", this.targetContent), m("targetCamera6", this.targetContent), m("targetCamera7", this.targetContent), m("buildingInstance", this.defaultContent), m("buildingTransform", this.defaultContent), m("building1Instance", this.defaultContent), m("building1Transform", this.defaultContent), m("contener2_Instance", this.defaultContent), m("contener2_Transform", this.defaultContent), m("CubeInstance", this.defaultContent), m("cubeTransform", this.defaultContent), m("house1Instance", this.defaultContent), m("house1Transform", this.defaultContent), m("house2Instance", this.defaultContent), m("house2Transform", this.defaultContent), m("treeInstance", this.defaultContent), m("treeTransform", this.defaultContent), m("tree2Instance", this.defaultContent), m("tree2Transform", this.defaultContent), m("building1Transform", this.cubeContent), m("buildingInstance", this.cubeContent), m("buildingTransform", this.cubeContent), m("columnInstance", this.cubeContent), m("columnTransform", this.cubeContent), m("contener2_Instance", this.cubeContent), m("contener2_Transform", this.cubeContent), m("CubeInstance", this.cubeContent), m("cubeTransform", this.cubeContent), m("cylinderInstance", this.cubeContent), m("cylinderTransform", this.cubeContent), m("tree2Instance", this.cubeContent), m("tree2Transform", this.cubeContent), m("treeInstance", this.cubeContent), m("treeTransform", this.cubeContent), m("contener2Instance", this.blueprintContent), m("contener2Transform", this.blueprintContent), m("tree2Instance", this.blueprintContent), m("tree2Transform", this.blueprintContent), m("columnInstance", this.blueprintContent), m("columnTransform", this.blueprintContent), m("cylinderInstance", this.blueprintContent), m("cylinderTransform", this.blueprintContent), m("contener2Instance", this.xraysContent), m("contener2Transform", this.xraysContent), m("tree2Instance", this.xraysContent), m("tree2Transform", this.xraysContent), m("columnInstance", this.xraysContent), m("columnTransform", this.xraysContent), m("cylinderInstance", this.xraysContent), m("cylinderTransform", this.xraysContent)]
                }
            }, {
                key: "initLight",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initLight", this).call(this, e),
                    this.lights[0].position.set(-.4, 1.8, 2),
                    this.lights[0].target.position.set(-1.05, .4, -.1),
                    this.lights[0].shadow.camera.bottom = -1.5,
                    this.lights[0].shadow.camera.top = 1.5,
                    this.lights[0].shadow.camera.near = 1,
                    this.lights[0].shadow.camera.far = 8,
                    this.lights[1].position.set(-.4, 1.8, 2),
                    this.lights[1].target.position.set(-1.05, .4, -.1),
                    this.lights[1].shadow.camera.bottom = -1.5,
                    this.lights[1].shadow.camera.top = 1,
                    this.lights[1].shadow.camera.left = -2,
                    this.lights[1].shadow.camera.right = 2,
                    this.lights[1].shadow.camera.near = 1,
                    this.lights[1].shadow.camera.far = 5
                }
            }, {
                key: "onLoad",
                value: function(e) {
                    var t = this;
                    e.scene.updateMatrixWorld(!0),
                    this.setCameras(e.cameras, {
                        near: .1,
                        far: 2250
                    }),
                    Vt(function() {
                        var n = g()();
                        t.sortMeshes(t.getMesh("state1", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.getMeshData("default", t.defaultContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state2", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.getMeshData("default", t.cubeContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.getMeshData("default", t.blueprintContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene).clone(), t.meshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.getMeshData("default", t.xraysContent, t.meshesData)),
                        t.cameras.setTargets([t.getMesh("targetCamera1", e.scene).position, t.getMesh("targetCamera2", e.scene).position, t.getMesh("targetCamera3", e.scene).position, t.getMesh("targetCamera4", e.scene).position, t.getMesh("targetCamera5", e.scene).position, t.getMesh("targetCamera6", e.scene).position, t.getMesh("targetCamera7", e.scene).position]),
                        console.log("%cModel " + t.name + " sort meshes time: %c" + (g()() - n) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.defaultContent),
                        t.mergeMesh("water", t.defaultContent),
                        t.mergeMesh("transparent", t.defaultContent),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "buildingInstance", "buildingTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "building1Instance", "building1Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "contener2_Instance", "contener2_Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "CubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "house1Instance", "house1Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "house2Instance", "house2Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "treeInstance", "treeTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "tree2Instance", "tree2Transform"),
                        t.mergeMesh("red", t.defaultContent),
                        t.mergeMesh("cloud1", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud2", t.defaultContent, {
                            uv: !0
                        }),
                        t.mergeMesh("cloud3", t.defaultContent, {
                            uv: !0
                        }),
                        console.log("%cModel " + t.name + " merge default time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.cubeContent),
                        t.mergeMesh("ground2", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("red", t.cubeContent),
                        t.mergeMesh("transparent", t.cubeContent),
                        t.mergeMesh("shadow", t.cubeContent, {
                            uv: !0
                        }),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "buildingInstance", "buildingTransform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "contener2_Instance", "contener2_Transform"),
                        t.cloneMoveMergeMeshFromOther("default", t.defaultContent, "building1Instance", t.cubeContent, "building1Transform"),
                        t.cloneMoveMergeMesh("red", t.cubeContent, "columnInstance", "columnTransform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "CubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "tree2Instance", "tree2Transform"),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "treeInstance", "treeTransform"),
                        t.cloneMoveMergeMesh("red", t.cubeContent, "cylinderInstance", "cylinderTransform"),
                        console.log("%cModel " + t.name + " merge cube time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.blueprintContent),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "contener2Instance", "contener2Transform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "tree2Instance", "tree2Transform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "columnInstance", "columnTransform"),
                        t.cloneMoveMergeMesh("default", t.blueprintContent, "cylinderInstance", "cylinderTransform"),
                        t.blueprintMesh(t.blueprintContent, {
                            displacementScale: -.05,
                            displacementBias: -.1
                        }),
                        console.log("%cModel " + t.name + " merge blueprint time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.xraysContent),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "contener2Instance", "contener2Transform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "tree2Instance", "tree2Transform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "columnInstance", "columnTransform"),
                        t.cloneMoveMergeMesh("default", t.xraysContent, "cylinderInstance", "cylinderTransform"),
                        t.xrayMesh(t.xraysContent, {
                            displacementScale: -.05,
                            displacementBias: -.1
                        }),
                        console.log("%cModel " + t.name + " merge x-rays time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        t.modelLoaded(),
                        t.wireframeCubeFactor = .25,
                        t.initWireframeCube(),
                        t.initWireframeTransition(),
                        $t.removeToProgress(1)
                    })
                }
            }, {
                key: "loadModels",
                value: function() {
                    var e = new As
                      , t = function() {
                        return 0
                    }
                      , n = function(e) {
                        return console.error("Model load error: " + e)
                    };
                    e.load(Ms.a, this.onLoad.bind(this), t, n)
                }
            }, {
                key: "tick",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "tick", this).call(this, e);
                    var n = e / 1e3
                      , a = !0
                      , s = !1
                      , i = void 0;
                    try {
                        for (var r, o = f()(this.meshesData); !(a = (r = o.next()).done); a = !0) {
                            var l = r.value;
                            l.mesh.material.uniforms && l.mesh.material.uniforms.time && (l.mesh.material.uniforms.time.value = n)
                        }
                    } catch (c) {
                        s = !0,
                        i = c
                    } finally {
                        try {
                            a || null == o.return || o.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    Object(P["a"])(Object(E["a"])(t.prototype), "dispose", this).call(this)
                }
            }]),
            t
        }(fs)
          , Ts = n("addc")
          , Ss = n.n(Ts);
        $t.addToProgress(6);
        var Ls = function(e) {
            function t(e, n, a) {
                var s;
                return Object(v["a"])(this, t),
                s = Object(L["a"])(this, Object(E["a"])(t).call(this, e, n, a, "Metro")),
                s.initMeshData(),
                s.initLight(s.scene),
                s.loadModels(),
                s
            }
            return Object(j["a"])(t, e),
            Object(b["a"])(t, [{
                key: "initCamera",
                value: function(e, n) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initCamera", this).call(this, e, n),
                    this.cameras.controlsAmplitudes.defaultX = 7,
                    this.cameras.controlsAmplitudes.defaultY = .1,
                    this.cameras.controlsAmplitudes.dirX.set(-1, 0, 1).normalize(),
                    this.cameras.controlsAmplitudes.dirY.set(0, 1, 0)
                }
            }, {
                key: "initMeshData",
                value: function() {
                    var e = Ca()
                      , t = Ta()
                      , n = Da()
                      , a = ka()
                      , s = Sa()
                      , i = Pa()
                      , r = Ca()
                      , o = wa();
                    s.uniforms.uZDeform.value.set(-1302, .0015),
                    s.uniforms.uDisplace.value = -.009,
                    this.initDarker([e, r]);
                    var l = fs.createMeshDataStruct;
                    this.meshesData = [l("default", this.defaultContent, Ua(e)), l("blue", this.defaultContent, Ua(n)), l("grey", this.defaultContent, Ua(a)), l("default", this.cubeContent, Ua(t)), l("blue", this.cubeContent, Ua(n)), l("grey", this.cubeContent, Ua(a)), l("ground3", this.cubeContent, Ua(r)), l("shadow", this.cubeContent, Ua(o, {
                        castShadow: !1,
                        receiveShadow: !1
                    }), {
                        renderOrder: this.cubeContent.renderOrder - 1
                    }), l("default", this.blueprintContent, Ua(i, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), l("default", this.xraysContent, Ua(s, {
                        castShadow: !1,
                        receiveShadow: !1,
                        name: "wireframe"
                    })), l("targetCam", this.targetContent, Ua(e))],
                    this.unmeshesData = [l("targetCamera1", this.targetContent), l("targetCamera2", this.targetContent), l("targetCamera3", this.targetContent), l("targetCamera4", this.targetContent), l("targetCamera5", this.targetContent), l("targetCamera6", this.targetContent), l("targetCamera7", this.targetContent), l("block1Instance", this.defaultContent), l("block1Transform", this.defaultContent), l("block2Instance", this.defaultContent), l("block2Transform", this.defaultContent), l("building2Instance", this.defaultContent), l("building2Transform", this.defaultContent), l("building3Instance", this.defaultContent), l("building3Transform", this.defaultContent), l("building4Instance", this.defaultContent), l("building4Transform", this.defaultContent), l("building5Instance", this.defaultContent), l("building5Transform", this.defaultContent), l("carInstance", this.defaultContent), l("carTransform", this.defaultContent), l("cubeInstance", this.defaultContent), l("cubeTransform", this.defaultContent), l("tree2Instance", this.defaultContent), l("tree2transform", this.defaultContent), l("tree2Instance", this.defaultContent), l("tree2transform", this.defaultContent), l("carInstance", this.cubeContent), l("carTransform", this.cubeContent)]
                }
            }, {
                key: "initLight",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "initLight", this).call(this, e),
                    this.lights[0].position.set(10, 4.9, -12.1),
                    this.lights[0].target.position.set(-44.6, -19.4, 34.5),
                    this.lights[0].shadow.camera.bottom = -10,
                    this.lights[0].shadow.camera.left = -10,
                    this.lights[0].shadow.camera.top = 10,
                    this.lights[0].shadow.camera.right = 10,
                    this.lights[0].shadow.camera.near = 0,
                    this.lights[0].shadow.camera.far = 30;
                    var n = new S["Yb"](-8.1,-4.2,5.1);
                    this.lights[1].position.copy(this.lights[0].position).add(n),
                    this.lights[1].target.position.copy(this.lights[0].target.position).add(n),
                    this.lights[1].shadow.camera.bottom = -1,
                    this.lights[1].shadow.camera.left = -3,
                    this.lights[1].shadow.camera.top = 1,
                    this.lights[1].shadow.camera.right = 3,
                    this.lights[1].shadow.camera.near = 0,
                    this.lights[1].shadow.camera.far = 7,
                    this.lights[1].shadow.mapSize.height /= 2
                }
            }, {
                key: "onLoad",
                value: function(e) {
                    var t = this;
                    e.scene.updateMatrixWorld(!0),
                    this.setCameras(e.cameras, {
                        near: 1,
                        far: 1e4
                    }),
                    Vt(function() {
                        var n = g()();
                        t.sortMeshes(t.getMesh("state1", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.defaultContent
                        }), t.getMeshData("default", t.defaultContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state2", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.cubeContent
                        }), t.getMeshData("default", t.cubeContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene), t.meshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.blueprintContent
                        }), t.getMeshData("default", t.blueprintContent, t.meshesData)),
                        t.sortMeshes(t.getMesh("state3", e.scene).clone(), t.meshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.unmeshesData.filter(function(e) {
                            return e.parent === t.xraysContent
                        }), t.getMeshData("default", t.xraysContent, t.meshesData)),
                        t.cameras.setTargets([t.getMesh("targetCamera1", e.scene).position, t.getMesh("targetCamera2", e.scene).position, t.getMesh("targetCamera3", e.scene).position, t.getMesh("targetCamera4", e.scene).position, t.getMesh("targetCamera5", e.scene).position, t.getMesh("targetCamera6", e.scene).position, t.getMesh("targetCamera7", e.scene).position]),
                        console.log("%cModel " + t.name + " sort meshes time: %c" + (g()() - n) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.defaultContent),
                        t.mergeMesh("blue", t.defaultContent),
                        t.mergeMesh("grey", t.defaultContent),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "block1Instance", "block1Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "block2Instance", "block2Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "building2Instance", "building2Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "building3Instance", "building3Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "building4Instance", "building4Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "building5Instance", "building5Transform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "carInstance", "carTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "cubeInstance", "cubeTransform"),
                        t.cloneMoveMergeMesh("default", t.defaultContent, "tree2Instance", "tree2transform"),
                        console.log("%cModel " + t.name + " merge default time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.cubeContent),
                        t.mergeMesh("blue", t.cubeContent),
                        t.mergeMesh("grey", t.cubeContent),
                        t.mergeMesh("shadow", t.cubeContent, {
                            uv: !0
                        }),
                        t.mergeMesh("ground3", t.cubeContent, {
                            uv: !0
                        }),
                        t.cloneMoveMergeMesh("default", t.cubeContent, "carInstance", "carTransform"),
                        console.log("%cModel " + t.name + " merge cube time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.blueprintContent),
                        t.blueprintMesh(t.blueprintContent),
                        console.log("%cModel " + t.name + " merge blueprint time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        var e = g()();
                        t.mergeMesh("default", t.xraysContent),
                        t.xrayMesh(t.xraysContent),
                        console.log("%cModel " + t.name + " merge x-rays time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }, function() {
                        t.modelLoaded(),
                        t.wireframeCubeFactor = .375,
                        t.initWireframeCube(),
                        t.initWireframeTransition(),
                        $t.removeToProgress(1)
                    })
                }
            }, {
                key: "loadModels",
                value: function() {
                    var e = new As
                      , t = function() {
                        return 0
                    }
                      , n = function(e) {
                        return console.error("Model load error: " + e)
                    };
                    e.load(Ss.a, this.onLoad.bind(this), t, n)
                }
            }, {
                key: "tick",
                value: function(e) {
                    Object(P["a"])(Object(E["a"])(t.prototype), "tick", this).call(this, e);
                    var n = e / 1e3
                      , a = !0
                      , s = !1
                      , i = void 0;
                    try {
                        for (var r, o = f()(this.meshesData); !(a = (r = o.next()).done); a = !0) {
                            var l = r.value;
                            l.mesh.material.uniforms && l.mesh.material.uniforms.time && (l.mesh.material.uniforms.time.value = n)
                        }
                    } catch (c) {
                        s = !0,
                        i = c
                    } finally {
                        try {
                            a || null == o.return || o.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    Object(P["a"])(Object(E["a"])(t.prototype), "dispose", this).call(this)
                }
            }]),
            t
        }(fs)
          , Es = function() {
            function e(t, n, a) {
                Object(v["a"])(this, e),
                this.renderer = t,
                this.width = n,
                this.height = a,
                this.enable = !0,
                this.passes = [],
                this.init(n, a)
            }
            return Object(b["a"])(e, [{
                key: "init",
                value: function(e, t) {
                    var n = {
                        minFilter: S["T"],
                        magFilter: S["gb"]
                    };
                    this.renderTargets = [new S["dc"](e,t,n), new S["dc"](e,t,n)],
                    this.meshes = []
                }
            }, {
                key: "addPass",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.passes.length;
                    this.passes.splice(t, 0, e);
                    for (var n = t; n < this.passes.length; n++)
                        this.attachPass(e, n)
                }
            }, {
                key: "removePass",
                value: function(e) {
                    var t = this.passes.indexOf(e);
                    if (t > -1) {
                        this.passes.splice(t, 1);
                        for (var n = t; n < this.passes.length; n++)
                            this.attachPass(e, n)
                    }
                }
            }, {
                key: "attachPass",
                value: function(e, t) {
                    e.init(this.renderTargets, t % 2, this.width, this.height)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.passes.forEach(function(e) {
                        return e.dispose()
                    }),
                    this.renderTargets.forEach(function(e) {
                        return e.dispose()
                    })
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.width = e,
                    this.height = t,
                    this.passes.forEach(function(n) {
                        return n.resize(e, t)
                    }),
                    this.renderTargets.forEach(function(n) {
                        return n.setSize(e, t)
                    })
                }
            }, {
                key: "render",
                value: function(e) {
                    if (this.enable)
                        for (var t = 0; t < this.passes.length; t++) {
                            var n = this.passes[t - 1]
                              , a = this.passes[t]
                              , s = this.passes[t + 1]
                              , i = n ? n.getScenesCamerasCallbackArray : e;
                            if (a.render({
                                renderer: this.renderer,
                                getScenesCamerasCallbackArray: i
                            }),
                            !s) {
                                var r = a.getScenesCamerasCallbackArray[0]()
                                  , o = Object(Ya["a"])(r, 2)
                                  , l = o[0]
                                  , c = o[1];
                                this.renderer.setRenderTarget(null),
                                this.renderer.render(l, c)
                            }
                        }
                    else {
                        var u = e[0]()
                          , d = Object(Ya["a"])(u, 2)
                          , m = d[0]
                          , h = d[1];
                        this.renderer.setRenderTarget(null),
                        this.renderer.render(m, h)
                    }
                }
            }]),
            e
        }()
          , Ps = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return S["Wb"].merge([S["Vb"].common, e, {
                screenSize: {
                    value: new S["Xb"](512,256)
                },
                map: {
                    type: "t",
                    value: null
                }
            }])
        }
          , js = function e(t) {
            var n = t.vertexShader
              , a = t.fragmentShader
              , s = t.uniforms
              , i = void 0 === s ? {} : s
              , r = t.defines
              , o = void 0 === r ? {} : r;
            return Object(v["a"])(this, e),
            new S["Jb"]({
                name: "ScreenMaterial",
                vertexShader: n,
                fragmentShader: a,
                uniforms: Ps(i),
                extensions: {
                    derivatives: !0,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                defines: D()({
                    USE_MAP: ""
                }, o),
                lights: !1
            })
        }
          , Os = n("15ab")
          , Is = n.n(Os)
          , ks = n("dcf8")
          , Ds = n.n(ks)
          , zs = n("b02b")
          , Rs = n.n(zs)
          , Ns = n("5c97")
          , Bs = n.n(Ns)
          , Fs = {
            stencilBuffer: !1,
            minFilter: S["T"],
            magFilter: S["gb"]
        }
          , Us = new S["wb"](1,1,1,1);
        Us.vertices.forEach(function(e) {
            e.x = e.x < 0 ? -1 : 1,
            e.y = e.y < 0 ? -1 : 1
        });
        var Gs = function() {
            function e() {
                var t = this
                  , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , a = n.material
                  , s = n.background
                  , i = void 0 === s ? new S["o"](Math.round(16777215 * Math.random())) : s
                  , r = n.texturesLabels
                  , o = void 0 === r ? ["map"] : r;
                Object(v["a"])(this, e),
                this.texturesLabels = o,
                this.material = a,
                this.scene = new S["Hb"],
                this.scene.background = i,
                this.camera = new S["ub"](70,1,1,1e3),
                this.camera.position.z = 5,
                this.getScenesCamerasCallbackArray = [function() {
                    return [t.scene, t.camera]
                }
                ]
            }
            return Object(b["a"])(e, [{
                key: "resize",
                value: function(e, t) {
                    this.material.uniforms.screenSize.value.x = e,
                    this.material.uniforms.screenSize.value.y = t,
                    this.camera.aspect = e / t,
                    this.camera.updateProjectionMatrix()
                }
            }, {
                key: "dispose",
                value: function() {
                    this.material.dispose()
                }
            }, {
                key: "init",
                value: function(e, t, n, a) {
                    var s = this;
                    this.resize(n, a),
                    this.srcTargets = [],
                    this.texturesLabels.forEach(function(i, r) {
                        var o;
                        r < 1 ? o = e[t] : (e[r + 1] || (e[r + 1] = new S["dc"](n,a,Fs)),
                        o = e[r + 1]),
                        s.srcTargets.push(o),
                        s.material.uniforms[i].value = o.texture
                    }),
                    this.mesh ? (this.mesh.material = this.material,
                    this.material.needsUpdate = !0) : (this.mesh = new S["cb"](Us,this.material),
                    this.scene.add(this.mesh))
                }
            }, {
                key: "render",
                value: function(e) {
                    for (var t = e.renderer, n = e.getScenesCamerasCallbackArray, a = 0; a < n.length; a++) {
                        var s = n[a]()
                          , i = Object(Ya["a"])(s, 2)
                          , r = i[0]
                          , o = i[1];
                        t.setRenderTarget(this.srcTargets[a]),
                        t.render(r, o)
                    }
                }
            }]),
            e
        }()
          , Hs = {
            stencilBuffer: !1,
            minFilter: S["T"],
            magFilter: S["gb"]
        }
          , Ws = new S["wb"](1,1,1,1);
        Ws.vertices.forEach(function(e) {
            e.x = e.x < 0 ? 0 : 1,
            e.y = e.y < 0 ? 0 : 1
        });
        var Ys = function(e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return Object(v["a"])(this, t),
                e = Object(L["a"])(this, Object(E["a"])(t).call(this, {
                    texturesLabels: ["map", "map2"],
                    background: new S["o"](12632256)
                })),
                e.isWebGL2 = n,
                e.samplesMin = 0,
                e.samplesMax = qt.WEBGL2_AA_SAMPLES,
                e.inOut = 0,
                e.fade = 0,
                e.onMasks = new me,
                e
            }
            return Object(j["a"])(t, e),
            Object(b["a"])(t, [{
                key: "resize",
                value: function(e, t) {
                    this.isWebGL2 && this.srcTargets && this.srcTargets.forEach(function(n) {
                        return n.setSize(e, t)
                    })
                }
            }, {
                key: "dispose",
                value: function() {}
            }, {
                key: "setSamples",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.samplesMax;
                    this.isWebGL2 && this.srcTargets && this.srcTargets.forEach(function(t) {
                        return t.samples = e
                    })
                }
            }, {
                key: "init",
                value: function(e, t, n, a) {
                    var s = this;
                    if (this.resize(n, a),
                    this.srcTargets = [],
                    this.texturesLabels.forEach(function(i, r) {
                        var o;
                        s.isWebGL2 ? (o = new S["cc"](n,a,Hs),
                        o.samples = s.samplesMax) : r < 1 ? o = e[t] : (e[r + 1] || (e[r + 1] = new S["dc"](n,a,Hs)),
                        o = e[r + 1]),
                        s.srcTargets.push(o)
                    }),
                    !this.meshes) {
                        this.meshes = [new S["cb"](Ws,new os({
                            defines: {
                                USE_MAP: ""
                            }
                        })), new S["cb"](Ws,new os({
                            defines: {
                                USE_MAP: ""
                            }
                        })), new S["cb"](Ws,new os), new S["cb"](Ws,new os), new S["cb"](Ws,new os), new S["cb"](Ws,new os), new S["cb"](Ws,new os), new S["cb"](Ws,new os)];
                        var i = 17545
                          , r = 14811173
                          , o = 16777215;
                        this.meshes[2].material.uniforms.uColor.value.set(i),
                        this.meshes[3].material.uniforms.uColor.value.set(i),
                        this.meshes[4].material.uniforms.uColor.value.set(r),
                        this.meshes[5].material.uniforms.uColor.value.set(r),
                        this.meshes[6].material.uniforms.uColor.value.set(o),
                        this.meshes[7].material.uniforms.uColor.value.set(o),
                        this.scene.add(this.meshes[0]),
                        this.scene.add(this.meshes[1]),
                        this.inOutGroup = new S["G"],
                        this.inOutGroup.add(this.meshes[2]),
                        this.inOutGroup.add(this.meshes[3]),
                        this.inOutGroup.add(this.meshes[4]),
                        this.inOutGroup.add(this.meshes[5]),
                        this.inOutGroup.add(this.meshes[6]),
                        this.inOutGroup.add(this.meshes[7]),
                        this.scene.add(this.inOutGroup)
                    }
                    this.meshes[0].material.uniforms.map.value = this.srcTargets[0].texture,
                    this.meshes[1].material.uniforms.map.value = this.srcTargets[1].texture
                }
            }, {
                key: "setMesh",
                value: function(e, t) {
                    var n, a, s = t.l, i = void 0 === s ? 0 : s, r = t.t, o = void 0 === r ? 0 : r, l = t.r, c = void 0 === l ? 1 : l, u = t.b, d = void 0 === u ? 1 : u, m = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0], h = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [1, 1], p = this.meshes[e].material.uniforms;
                    p.uPos.value.set(i, o),
                    p.uSize.value.set(c - i, d - o),
                    (n = p.uUvPos.value).set.apply(n, Object(T["a"])(m)),
                    (a = p.uUvSize.value).set.apply(a, Object(T["a"])(h))
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = e.renderer
                      , n = e.getScenesCamerasCallbackArray;
                    if (0 !== this.inOut) {
                        var a = $t.getGrid();
                        this.setMesh(1, {
                            l: a.xb3DR[0],
                            t: 0,
                            r: a.xb3DR[1],
                            b: a.yLimit
                        }),
                        this.setMesh(0, {
                            l: a.xb3DL[0],
                            t: 0,
                            r: a.xb3DL[1],
                            b: a.yLimit
                        }),
                        this.setMesh(2, {
                            l: a.xbBlue[0],
                            t: 0,
                            r: a.xbBlue[1],
                            b: a.yLimit
                        }),
                        this.setMesh(4, {
                            l: a.xbRed[0],
                            t: 0,
                            r: a.xbRed[1],
                            b: a.yLimit
                        }),
                        this.setMesh(3, {
                            l: a.xtBlue[0],
                            t: a.yLimit,
                            r: a.xtBlue[1],
                            b: 1
                        }),
                        this.setMesh(5, {
                            l: a.xtRed[0],
                            t: a.yLimit,
                            r: a.xtRed[1],
                            b: 1
                        }),
                        this.setMesh(6, {
                            l: a.xtBlue[1],
                            t: a.yLimit,
                            r: 1,
                            b: 1
                        }),
                        this.setMesh(7, {
                            l: 0,
                            t: a.yLimit,
                            r: a.xtRed[0],
                            b: 1
                        }),
                        this.meshes[1].visible = !0,
                        this.inOutGroup.visible = !0
                    } else
                        0 !== this.fade ? (this.setMesh(0, {
                            l: 0,
                            t: this.fade,
                            r: 1,
                            b: 1
                        }, [0, this.fade], [1, 1 - this.fade]),
                        this.setMesh(1, {
                            l: 0,
                            t: 0,
                            r: 1,
                            b: this.fade
                        }, [0, 0], [1, this.fade]),
                        this.meshes[1].visible = !0,
                        this.inOutGroup.visible = !1) : (this.setMesh(0, {
                            l: 0,
                            t: 0,
                            r: 1,
                            b: 1
                        }, [0, 0], [1, 1]),
                        this.meshes[1].visible = !1,
                        this.inOutGroup.visible = !1);
                    if (0 !== this.fade && n.length > 1)
                        this.setSamples(this.samplesMin),
                        t.setRenderTarget(this.srcTargets[0]),
                        t.render.apply(t, Object(T["a"])(n[0]())),
                        t.setRenderTarget(this.srcTargets[1]),
                        t.render.apply(t, Object(T["a"])(n[1]()));
                    else if (0 !== this.inOut) {
                        this.setSamples(this.samplesMax);
                        var s = n[0]()
                          , i = Object(Ya["a"])(s, 2)
                          , r = i[0]
                          , o = i[1];
                        t.setRenderTarget(this.srcTargets[this.inOut <= .5 ? 0 : 1]),
                        t.render(r, o)
                    } else {
                        this.setSamples(this.samplesMax);
                        var l = n[0]()
                          , c = Object(Ya["a"])(l, 2)
                          , u = c[0]
                          , d = c[1];
                        t.setRenderTarget(this.srcTargets[0]),
                        t.render(u, d)
                    }
                }
            }]),
            t
        }(Gs)
          , qs = {
            isWebGLAvailable: function() {
                try {
                    var e = document.createElement("canvas");
                    return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
                } catch (t) {
                    return !1
                }
            },
            isWebGL2Available: function() {
                try {
                    var e = document.createElement("canvas");
                    return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"))
                } catch (t) {
                    return !1
                }
            },
            getWebGLErrorMessage: function() {
                return this.getErrorMessage(1)
            },
            getWebGL2ErrorMessage: function() {
                return this.getErrorMessage(2)
            },
            getErrorMessage: function(e) {
                var t = {
                    1: "WebGL",
                    2: "WebGL 2"
                }
                  , n = {
                    1: window.WebGLRenderingContext,
                    2: window.WebGL2RenderingContext
                }
                  , a = "Your $0 does not seem to support $1";
                return a = n[e] ? a.replace("$0", "graphics card") : a.replace("$0", "browser"),
                a.replace("$1", t[e])
            }
        }
          , Zs = function() {
            function e(t, n, a) {
                Object(v["a"])(this, e),
                this.isWebgl2 = qs.isWebGL2Available();
                var s = this.isWebgl2 ? t.getContext("webgl2", {
                    antialias: !1
                }) : null;
                console.log("%cWebgl: %cversion " + (this.isWebgl2 ? 2 : 1), "color: #A7A7AB;", "color: #1F56FB;"),
                console.log("%cPixel ratio: %c" + Yt.PIXEL_RATIO, "color: #A7A7AB;", "color: #1F56FB;");
                var i = console.log;
                console.log = function() {
                    return 1
                }
                ,
                this.renderer = new S["ec"]({
                    canvas: t,
                    alpha: !1,
                    antialias: !1,
                    stencil: !1,
                    powerPreference: "high-performance",
                    depth: !0,
                    logarithmicDepthBuffer: !1,
                    context: s
                }),
                this.renderer.setPixelRatio(Yt.PIXEL_RATIO),
                console.log = i,
                this.initPostProcess(n, a),
                this.resize(n, a)
            }
            return Object(b["a"])(e, [{
                key: "initPostProcess",
                value: function(e, t) {
                    this.postprocess = new Es(this.renderer,e,t),
                    this.transitionPass = new Ys(this.isWebgl2),
                    this.postprocess.addPass(this.transitionPass),
                    this.postprocess.addPass(new Gs({
                        material: new js({
                            vertexShader: Is.a,
                            fragmentShader: Ds.a
                        })
                    })),
                    qt.FXAA_ENABLED && this.postprocess.addPass(new Gs({
                        material: new js({
                            vertexShader: Rs.a,
                            fragmentShader: Bs.a,
                            defines: {
                                FXAA_REDUCE_MIN: "(1.0/ 128.0)",
                                FXAA_REDUCE_MUL: "(1.0 / 8.0)",
                                FXAA_SPAN_MAX: "8.0"
                            }
                        })
                    })),
                    this.postprocess.enable = !0
                }
            }, {
                key: "forceRender",
                value: function(e, t) {
                    this.postprocess.renderer.compile(e, t)
                }
            }, {
                key: "render",
                value: function(e) {
                    this.postprocess.render(e)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.postprocess.dispose(),
                    this.renderer.dispose()
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.postprocess.resize(e, t),
                    this.renderer.setSize(e, t)
                }
            }]),
            e
        }();
        $t.addToProgress(15);
        var Xs = !1
          , Qs = {
            ProjectDam: bs,
            ProjectPort: ws,
            ProjectMuseum: _s,
            ProjectMetro: Ls
        }
          , Vs = function() {
            var e = new S["db"]
              , t = new S["vb"]
              , n = new S["cb"](t,e);
            n.frustumCulled = !1;
            var a = new S["Hb"];
            a.add(n);
            var s = new S["l"];
            return function(t, n) {
                e.map = t,
                n.render(a, s)
            }
        }()
          , Js = function() {
            function e(t, n, a) {
                var s = this;
                Object(v["a"])(this, e),
                this.engine = new Zs(t,n,a),
                this.projects = Ht.filter(function(e) {
                    return e.meta && "project" === e.meta.type
                }).map(function(e) {
                    return Qs[e.meta.class]
                }).map(function(e) {
                    return new e(s.engine,n,a)
                }),
                e.count = this.projects.length,
                e.onCountUpdated && e.onCountUpdated(e.count),
                this.width = n,
                this.currentProject = 0,
                this.nextProject = this.currentProject,
                this.fadeProject = 0,
                this.setBoxSize = this.setBoxSize.bind(this),
                $t.onBoxMove.add(this.setBoxSize)
            }
            return Object(b["a"])(e, [{
                key: "initDrag",
                value: function() {
                    this.drag = new dt({
                        element: document.body,
                        onMoveCb: this.onDrag.bind(this),
                        onDropCb: this.onStopDrag.bind(this),
                        minDist: 10,
                        inertia: .92
                    })
                }
            }, {
                key: "onStopDrag",
                value: function() {
                    if (Xs && 0 === this.projects[this.currentProject].state && 0 === this.projects[this.currentProject].fade) {
                        if (0 !== this.dragValue) {
                            var e = this.currentProject < 1 ? this.projects.length - 1 : this.currentProject - 1
                              , t = (this.currentProject + 1) % this.projects.length
                              , n = this.dragValue < -.5 || this.dragValue > .5 ? this.currentProject : this.dragValue >= 0 ? t : e
                              , a = n !== this.currentProject ? this.currentProject : this.dragValue >= 0 ? t : e;
                            $t.globalNav.projectCurrent = n,
                            $t.fadeToProject(a, {
                                force: !0,
                                duration: 2e3 * Math.abs(.5 - Math.abs(this.dragValue)),
                                sectionFade: this.dragValue,
                                lastProject: n
                            })
                        }
                        this.dragValue = 0
                    }
                }
            }, {
                key: "onDrag",
                value: function(e, t) {
                    if (Xs && 0 === this.projects[this.currentProject].state && 0 === this.projects[this.currentProject].fade) {
                        this.dragValue || (this.dragValue = 0),
                        this.dragValue -= e / this.width,
                        this.dragNextProject = this.dragValue >= 0 ? (this.currentProject + 1) % this.projects.length : this.currentProject < 1 ? this.projects.length - 1 : this.currentProject - 1;
                        var n = .74
                          , a = Math.max(Math.min(this.dragValue >= 0 ? this.dragValue : -this.dragValue, n), -n);
                        $t.globalNav.projectNext = this.dragNextProject,
                        $t.globalNav.isToRight = this.dragNextProject > this.currentProject,
                        $t.setFadeProject(a)
                    } else
                        this.projects[this.currentProject].cameras.drag(e, t)
                }
            }, {
                key: "setBoxSize",
                value: function(e) {
                    this.projects[this.currentProject].setBoxSize(e)
                }
            }, {
                key: "setSectionCurrent",
                value: function(e) {
                    this.projects[this.currentProject].state = e
                }
            }, {
                key: "setSectionFade",
                value: function(e) {
                    3 === this.projects[this.currentProject].state && 0 === e || (this.engine.transitionPass.fade = e),
                    this.projects[this.currentProject].fade = e
                }
            }, {
                key: "setLoaded",
                value: function() {
                    this.initDrag()
                }
            }, {
                key: "setIntroFade",
                value: function(e, t) {
                    this.projects[e].isIntro = !0,
                    this.projects[e].inOut = t,
                    this.currentProject = e,
                    this.nextProject = e
                }
            }, {
                key: "setProjectFade",
                value: function(e, t, n) {
                    this.currentProject = e,
                    this.nextProject = t,
                    this.fadeProject = n,
                    this.projects[e].inOut = 2 * n,
                    this.projects[t].inOut = 2 - 2 * n,
                    this.projects[e].toRight = t < e,
                    this.projects[t].toRight = t > e,
                    this.engine.transitionPass.inOut = t > e ? n : 1 - n,
                    this.projects[e].isIntro = !1,
                    this.projects[t].isIntro = !1,
                    this.projects[t].dt && (this.projects[t].dt = 0),
                    e === t && this.setProject(t)
                }
            }, {
                key: "setProject",
                value: function(e) {
                    this.currentProject = e,
                    this.projects[e].inOut = 0,
                    this.engine.transitionPass.inOut = 0
                }
            }, {
                key: "forceRender",
                value: function(e) {
                    var t = this
                      , n = [];
                    this.projects.map(function(e) {
                        return n.push.apply(n, Object(T["a"])(e.forceRender().map(function(e) {
                            return function() {
                                e(),
                                $t.removeToProgress(1)
                            }
                        })))
                    }),
                    Ft.PRERENDER_DISABLED || (n.push(function() {
                        var e = g()()
                          , n = t.projects[t.currentProject].getRenderData(!0);
                        t.engine.render(n),
                        console.log("%cPost process prerender time: %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1)
                    }),
                    n.push(function() {
                        var e = g()();
                        $t.textures.forEach(function(e) {
                            return Vs(e, t.engine.renderer)
                        }),
                        console.log("%cTextures prerender %c" + (g()() - e) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;"),
                        $t.removeToProgress(1),
                        console.log("%cTotal prerender time: %c" + (g()() - $t.startTime) / 1e3 + "sec", "color: #A7A7AB;", "color: #1F56FB;")
                    })),
                    n.push(function() {
                        e(),
                        $t.removeToProgress(1)
                    }),
                    Vt.apply(void 0, n)
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.width = e,
                    this.engine.resize(e, t),
                    this.projects.forEach(function(n) {
                        return n.resize(e, t)
                    })
                }
            }, {
                key: "tick",
                value: function(e) {
                    if (this.projects[this.currentProject].state < 4)
                        if (this.projects[this.currentProject].tick(e),
                        this.currentProject !== this.nextProject)
                            if (this.projects[this.nextProject].tick(e),
                            this.fadeProject < .5) {
                                var t = this.projects[this.currentProject].getRenderData(!0);
                                this.engine.render(t)
                            } else {
                                var n = this.projects[this.nextProject].getRenderData(!0);
                                this.engine.render(n)
                            }
                        else {
                            var a = this.projects[this.currentProject].getRenderData(!0);
                            this.engine.render(a)
                        }
                }
            }, {
                key: "dispose",
                value: function() {
                    this.projects.forEach(function(e) {
                        return e.dispose()
                    }),
                    this.engine.dispose(),
                    $t.onBoxMove.remove(this.setBoxSize)
                }
            }]),
            e
        }()
          , Ks = {
            mixins: [C],
            data: function() {
                return {
                    globalNav: $t.globalNav
                }
            },
            watch: {
                "globalNav.sectionCurrent": function(e) {
                    this.projects.setSectionCurrent(e)
                },
                "globalNav.isLoaded": function(e) {
                    e && this.projects.setLoaded()
                }
            },
            mounted: function() {
                this.projects = new Js(this.$el,this.resize.width,this.resize.height),
                this.projects.setProject(this.globalNav.projectCurrent),
                this.projects.setSectionCurrent(this.globalNav.sectionCurrent),
                this.projects.setSectionFade($t.sectionFade),
                this.projects.setProjectFade(this.globalNav.projectCurrent, this.globalNav.projectNext, $t.projectFade),
                $t.onAssetsLoaded.addOnce(this.onAssetsLoaded),
                $t.onSectionFade.add(this.onSectionFade),
                $t.onProjectFade.add(this.onProjectFade),
                $t.onIntroFade.add(this.onIntroFade),
                this.globalNav.isLoaded && (this.projects.setLoaded(),
                this.tick())
            },
            destroyed: function() {
                this.projects.dispose(),
                window.cancelAnimationFrame(this.rafTo),
                $t.onAssetsLoaded.remove(this.onAssetsLoaded),
                $t.onSectionFade.remove(this.onSectionFade),
                $t.onProjectFade.remove(this.onProjectFade),
                $t.onIntroFade.remove(this.onIntroFade)
            },
            methods: {
                onIntroFade: function(e) {
                    this.projects.setIntroFade(this.globalNav.projectCurrent, e)
                },
                onSectionFade: function(e) {
                    this.projects.setSectionFade(e)
                },
                onProjectFade: function(e) {
                    this.projects.setProjectFade(this.globalNav.projectCurrent, this.globalNav.projectNext, e)
                },
                onAssetsLoaded: function() {
                    this.projects.forceRender(function() {
                        $t.onGPULoaded.dispatch()
                    }),
                    this.tick()
                },
                onResized: function(e, t) {
                    this.projects.resize(e, t)
                },
                tick: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.projects.tick(e),
                    this.rafTo = window.requestAnimationFrame(this.tick)
                }
            }
        }
          , $s = Ks
          , ei = (n("33c2"),
        Object(ge["a"])($s, M, _, !1, null, "563a2457", null))
          , ti = ei.exports
          , ni = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "prev-next"
            }, [a("router-link", {
                staticClass: "prev",
                class: {
                    "is-enable": e.isPrevEnable
                },
                attrs: {
                    to: e.prevPath
                }
            }, [a("img", {
                attrs: {
                    src: n("2b44"),
                    width: "31",
                    height: "26",
                    alt: "Next arrow"
                }
            })]), a("router-link", {
                staticClass: "next",
                class: {
                    "is-enable": e.isNextEnable
                },
                attrs: {
                    to: e.nextPath
                }
            }, [a("img", {
                attrs: {
                    src: n("2b44"),
                    width: "31",
                    height: "26",
                    alt: "Previous arrow"
                }
            })])], 1)
        }
          , ai = []
          , si = {
            data: function() {
                return {
                    globalNav: $t.globalNav
                }
            },
            computed: {
                projectList: function() {
                    var e = this
                      , t = this.$route.params.lang;
                    return Ht.filter(function(e) {
                        return e.meta && "project" === e.meta.type
                    }).map(function(n) {
                        return {
                            name: n.name,
                            params: {
                                lang: t,
                                slug: e.$t("".concat(n.name, ".meta.url"))
                            }
                        }
                    })
                },
                prevPath: function() {
                    var e = this.projectList;
                    return this.isPrevEnable ? e[this.globalNav.projectCurrent - 1] : e[this.globalNav.projectCurrent]
                },
                nextPath: function() {
                    var e = this.projectList;
                    return this.isNextEnable ? e[this.globalNav.projectCurrent + 1] : e[this.globalNav.projectCurrent]
                },
                isPrevEnable: function() {
                    return this.globalNav.projectCurrent > 0
                },
                isNextEnable: function() {
                    var e = this.projectList;
                    return this.globalNav.projectCurrent < e.length - 1
                }
            }
        }
          , ii = si
          , ri = (n("3ce9"),
        Object(ge["a"])(ii, ni, ai, !1, null, "53c871e1", null))
          , oi = ri.exports
          , li = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "loader",
                class: {
                    "hide-bg": e.state > 2
                }
            }, [a("span", {
                staticClass: "bg",
                class: {
                    visible: e.state > 0,
                    disable: e.state > 2
                }
            }), a("div", {
                staticClass: "white-screen",
                class: {
                    disable: e.state > 2
                }
            }, [a("div", {
                staticClass: "content"
            }, [a("div", {
                staticClass: "screen-title"
            }, [a("div", {
                staticClass: "line-1",
                class: {
                    visible: e.state > 0,
                    top: e.state > 1
                }
            }, [a("span", {
                staticClass: "loading-title"
            }, [e._v("\n                        " + e._s(e.$t("loader.titleA")) + "\n                    ")])]), a("div", {
                staticClass: "line-2",
                class: {
                    visible: e.state > 0,
                    top: e.state > 1
                }
            }, [a("span", {
                staticClass: "loading-title"
            }, [e._v("\n                        " + e._s(e.$t("loader.titleB")) + "\n                    ")])])])])]), a("div", {
                staticClass: "red-screen",
                class: {
                    visible: e.state > 1,
                    exit: e.state > 2
                }
            }, [a("div", {
                staticClass: "content"
            }, [a("span", {
                staticClass: "bg"
            }), a("div", {
                staticClass: "screen-title"
            }, [a("div", {
                staticClass: "line-1",
                class: {
                    visible: e.state > 0,
                    top: e.state > 1
                }
            }, [a("span", {
                staticClass: "loading-title"
            }, [e._v("\n                        " + e._s(e.$t("loader.titleA")) + "\n                    ")])]), a("div", {
                staticClass: "line-2",
                class: {
                    visible: e.state > 0,
                    top: e.state > 1
                }
            }, [a("span", {
                staticClass: "loading-title"
            }, [e._v("\n                        " + e._s(e.$t("loader.titleB")) + "\n                    ")])])])])]), a("span", {
                staticClass: "loading-text u-color-red t-text-sm",
                class: {
                    visible: e.state > 0,
                    move: e.state > 1
                }
            }, [e._v("\n        " + e._s(e.$t("loader.loading")) + "\n        "), a("span", {
                ref: "loadbar",
                staticClass: "load-bar"
            }), a("svg", {
                attrs: {
                    width: "20px",
                    height: "20px",
                    viewBox: "0 0 100 100"
                }
            }, [a("circle", {
                attrs: {
                    cx: "50",
                    cy: "50",
                    fill: "none",
                    stroke: "#ff2b2b",
                    "stroke-width": "10",
                    r: "35",
                    "stroke-dasharray": "164.93361431346415 56.97787143782138"
                }
            })])]), a("header", {
                staticClass: "c-page-w header"
            }, [a("div", {
                staticClass: "main-logo"
            }, [a("router-link", {
                staticClass: "icon",
                attrs: {
                    to: {
                        name: "home",
                        params: {
                            slug: e.$t("project1.meta.url")
                        }
                    }
                }
            }, [a("img", {
                staticClass: "white",
                class: {
                    visible: e.state > 1
                },
                attrs: {
                    src: n("071b"),
                    srcset: n("28ef") + " 2x, " + n("99b0") + " 4x, " + n("ae1a") + " 5x",
                    width: "244",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            }), a("img", {
                staticClass: "color",
                class: {
                    visible: 1 === e.state
                },
                attrs: {
                    src: n("5134"),
                    srcset: n("ef80") + " 2x, " + n("dbb8") + " 4x, " + n("ec62") + " 5x",
                    width: "244",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            })])], 1)])])
        }
          , ci = []
          , ui = {
            data: function() {
                return {
                    globalNav: $t.globalNav,
                    state: 0
                }
            },
            created: function() {
                $t.onProgress.add(this.onLoadUpdate)
            },
            destroyed: function() {
                $t.onProgress.remove(this.onLoadUpdate)
            },
            mounted: function() {
                var e = this;
                window.setTimeout(function() {
                    return e.state = 1
                }, 1e3),
                window.setTimeout(function() {
                    return $t.onIntroReady.dispatch()
                }, 4100),
                $t.onGPULoaded.addOnce(function() {
                    e.state = 2,
                    window.setTimeout(function() {
                        e.state = 3,
                        window.setTimeout(function() {
                            $t.onIntroEnded.dispatch()
                        }, 500)
                    }, 2e3)
                })
            },
            methods: {
                onLoadUpdate: function(e) {
                    this.$refs.loadbar.style.width = 100 - 100 * e + "%"
                }
            }
        }
          , di = ui
          , mi = (n("74d4"),
        Object(ge["a"])(di, li, ci, !1, null, "937fe6b6", null))
          , hi = mi.exports
          , pi = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "modal"
            }, [a("div", {
                staticClass: "bg",
                on: {
                    click: function(t) {
                        e.onClose()
                    }
                }
            }), a("div", {
                staticClass: "content"
            }, [a("button", {
                staticClass: "close",
                on: {
                    click: function(t) {
                        e.onClose()
                    }
                }
            }, [a("span", {
                staticClass: "text"
            }, [e._v(e._s(e.$t("popin.close")))]), a("img", {
                staticClass: "icon",
                attrs: {
                    width: "21",
                    height: "21",
                    src: n("dbfc"),
                    alt: "Close"
                }
            })]), a("div", {
                staticClass: "video-content"
            }, [a("iframe", {
                staticClass: "video",
                attrs: {
                    width: "1280",
                    height: "720",
                    src: "https://www.youtube-nocookie.com/embed/" + e.id + "?color=white&controls=2&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0",
                    frameborder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowfullscreen: ""
                }
            })])])])
        }
          , fi = []
          , Ai = {
            name: "app-modal",
            props: {
                youtubeId: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    id: ""
                }
            },
            created: function() {
                this.id = this.youtubeId
            },
            methods: {
                onClose: function() {
                    $t.globalNav.modalVideo = !1
                }
            }
        }
          , gi = Ai
          , vi = (n("5f34"),
        Object(ge["a"])(gi, pi, fi, !1, null, "187220af", null))
          , bi = vi.exports
          , xi = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "mobile-nav",
                class: {
                    "is-bar-visible": e.globalNav.isIntro
                }
            }, [a("div", {
                staticClass: "prev-next"
            }, [a("router-link", {
                staticClass: "prev",
                class: {
                    "is-enable": e.isPrevEnable
                },
                attrs: {
                    to: e.prevPath
                }
            }, [a("img", {
                attrs: {
                    src: n("2b44"),
                    width: "31",
                    height: "26",
                    alt: "Next arrow"
                }
            })]), a("router-link", {
                staticClass: "next",
                class: {
                    "is-enable": e.isNextEnable
                },
                attrs: {
                    to: e.nextPath
                }
            }, [a("img", {
                attrs: {
                    src: n("2b44"),
                    width: "31",
                    height: "26",
                    alt: "Previous arrow"
                }
            })])], 1), a("button", {
                staticClass: "explore-btn c-button--white",
                on: {
                    click: function(t) {
                        e.explore()
                    }
                }
            }, [a("span", {
                staticClass: "c-button__out"
            }, [a("span", {
                staticClass: "c-button__text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.footer.explore"))
                }
            }), a("img", {
                staticClass: "c-button__icon--right",
                attrs: {
                    src: n("4cdd"),
                    width: "26",
                    height: "28",
                    alt: "Down arrow"
                }
            })]), a("span", {
                staticClass: "c-button__hover"
            }, [a("span", {
                staticClass: "c-button__hover-content"
            }, [a("span", {
                staticClass: "c-button__text",
                domProps: {
                    innerHTML: e._s(e.$t("pages.footer.explore"))
                }
            }), a("img", {
                staticClass: "c-button__icon--right",
                attrs: {
                    src: n("bb28"),
                    width: "26",
                    height: "28",
                    alt: "Down arrow"
                }
            })])])])])
        }
          , yi = []
          , wi = {
            data: function() {
                return {
                    globalNav: $t.globalNav
                }
            },
            computed: {
                projectList: function() {
                    var e = this
                      , t = this.$route.params.lang;
                    return Ht.filter(function(e) {
                        return e.meta && "project" === e.meta.type
                    }).map(function(n) {
                        return {
                            name: n.name,
                            params: {
                                lang: t,
                                slug: e.$t("".concat(n.name, ".meta.url"))
                            }
                        }
                    })
                },
                prevPath: function() {
                    var e = this.projectList;
                    return this.isPrevEnable ? e[this.globalNav.projectCurrent - 1] : e[this.globalNav.projectCurrent]
                },
                nextPath: function() {
                    var e = this.projectList;
                    return this.isNextEnable ? e[this.globalNav.projectCurrent + 1] : e[this.globalNav.projectCurrent]
                },
                isPrevEnable: function() {
                    return this.globalNav.projectCurrent > 0
                },
                isNextEnable: function() {
                    var e = this.projectList;
                    return this.globalNav.projectCurrent < e.length - 1
                }
            },
            methods: {
                explore: function() {
                    $t.fadeToContent()
                }
            }
        }
          , Ci = wi
          , Mi = (n("71aa"),
        Object(ge["a"])(Ci, xi, yi, !1, null, "e48b1eec", null))
          , _i = Mi.exports
          , Ti = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "mobile-menu",
                class: {
                    "is-menu-open": e.isMenuOpen,
                    "is-intro": e.globalNav.isIntro,
                    "is-hidden": !e.scrollToTop && !e.globalNav.isIntro
                }
            }, [a("nav", {
                staticClass: "menu"
            }, [a("router-link", {
                staticClass: "logo",
                attrs: {
                    to: "/" + e.$route.params.lang
                }
            }, [a("img", {
                attrs: {
                    src: n("2010"),
                    srcset: n("897c") + " 2x, " + n("e069") + " 4x, " + n("c0d7") + " 5x",
                    width: "41",
                    height: "41",
                    alt: "Soletanche Bachy"
                }
            })]), a("ul", {
                staticClass: "list"
            }, e._l(e.links, function(t) {
                return a("li", {
                    staticClass: "item",
                    class: {
                        "is-selected": t.index === e.globalNav.projectNext
                    }
                }, [a("router-link", {
                    staticClass: "link",
                    attrs: {
                        to: t.link
                    },
                    domProps: {
                        innerHTML: e._s(t.title)
                    }
                })], 1)
            }), 0), a("app-corpo-link", {
                staticClass: "corpo-link is-menu"
            })], 1), a("div", {
                staticClass: "mobile-menu-buttons"
            }, [a("app-switch-lang", {
                staticClass: "switch-lang is-to-bottom",
                attrs: {
                    color: e.color
                }
            }), a("button", {
                staticClass: "menu-button",
                on: {
                    click: function(t) {
                        e.isMenuOpen = !e.isMenuOpen
                    }
                }
            }), a("button-scroll-top", {
                staticClass: "button-scroll-top",
                attrs: {
                    "is-visible": !e.globalNav.isIntro
                },
                on: {
                    click: function(t) {
                        e.backToTop()
                    }
                }
            })], 1)])
        }
          , Si = []
          , Li = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("span", {
                staticClass: "switch-lang",
                class: [e.isOpen && "is-open", !e.isOpen && "is-close"]
            }, [n("button", {
                staticClass: "current",
                style: {
                    color: e.color
                },
                on: {
                    click: function(t) {
                        t.preventDefault(),
                        t.stopPropagation(),
                        e.isOpen = !e.isOpen
                    }
                }
            }, [n("IconPlanet", {
                attrs: {
                    color: e.color
                }
            }), n("span", {
                staticClass: "current-lang",
                domProps: {
                    innerHTML: e._s(e.currentLang)
                }
            }), e._v("\n        ▾\n    ")], 1), n("span", {
                staticClass: "hover",
                style: {
                    height: e.langList.length - 1 + "00%"
                }
            }, [e._l(e.otherLangs, function(t) {
                return [n(t !== e.currentLang ? "router-link" : "span", {
                    key: t,
                    tag: "component",
                    class: ["hover-item", t === e.currentLang && "is-active"],
                    style: {
                        color: e.color
                    },
                    attrs: {
                        to: e.getCurrentPage(t)
                    },
                    domProps: {
                        innerHTML: e._s(t)
                    }
                })]
            })], 2)])
        }
          , Ei = []
          , Pi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("svg", {
                staticClass: "icon-planet",
                attrs: {
                    viewBox: "0 0 241.73 241.79",
                    width: "18",
                    height: "18"
                }
            }, [n("path", {
                attrs: {
                    fill: e.color,
                    d: "M210.94,40.28c-11.23-12.55-24.66-22.41-39.91-29.37c-15.79-7.22-32.67-10.84-50.17-10.84h-0.17\n    c-0.11,0-0.12-0.03-0.23-0.03l0.21-0.02V0c-0.4,0-0.12,0-0.14,0C103.13,0.06,86.3,3.74,70.6,10.94C55.4,17.9,42,27.81,30.81,40.31\n    l4.73,4.28h-0.01l-4.74-4.28C10.94,62.49,0,91.09,0,120.87c0,29.78,10.97,58.39,30.82,80.57l4.77-4.25v0l-4.77,4.24\n    c11.19,12.5,24.55,22.41,39.75,29.38c15.72,7.21,32.5,10.98,49.92,10.98h0l0,0h0h0l0,0c0,0,0.01,0,0.02,0l0,0h0.01\n    c0.06,0,0.12,0,0.18,0h0.17c17.49,0,34.37-3.7,50.17-10.91c15.25-6.97,28.68-16.88,39.91-29.43c19.85-22.18,30.79-50.81,30.79-80.59\n    C241.73,91.08,230.79,62.46,210.94,40.28z M228.81,114.57h-44.68c-0.49-18.29-3.04-35.76-7.5-51.58c10.3-2.76,19.7-6.24,28.04-10.42\n    C219.06,70.2,227.48,91.9,228.81,114.57z M127.03,69.88c12.72-0.33,25.29-1.65,37.18-4.01c4.24,14.85,6.7,31.59,7.19,48.69h-44.37\n    V69.88z M127.03,57.16V13.61c5.57,1.61,11.28,5.39,16.61,11.3c6.38,7.09,12.03,16.94,16.54,28.75\n    C149.57,55.67,138.56,56.84,127.03,57.16z M114.31,13.61v43.54c-11.53-0.33-22.5-1.52-33.11-3.55c4.5-11.77,10.14-21.59,16.49-28.66\n    C103.03,19.01,108.75,15.22,114.31,13.61z M77.17,65.81c11.88,2.38,24.42,3.71,37.14,4.06v44.69H69.99\n    C70.47,97.47,72.92,80.68,77.17,65.81z M114.31,127.29v44.55c-12.72,0.35-25.26,1.76-37.14,4.13c-4.25-14.87-6.7-31.58-7.18-48.68\n    H114.31z M114.31,184.56v43.54c-5.57-1.61-11.27-5.4-16.6-11.33c-6.36-7.07-12.01-16.89-16.51-28.66\n    C91.8,186.08,102.78,184.89,114.31,184.56z M127.03,228.1v-43.55c11.53,0.31,22.54,1.48,33.15,3.5\n    c-4.51,11.81-10.17,21.66-16.55,28.75C138.31,222.72,132.6,226.5,127.03,228.1z M164.22,175.9c-11.89-2.36-24.46-3.75-37.18-4.08\n    v-44.54h44.37C170.92,144.38,168.46,161.05,164.22,175.9z M195.64,42.73c-6.89,3.16-14.64,5.9-22.92,8.09\n    c-4.84-13.14-11.04-24.34-18.16-32.76c3.79,1.24,7.52,2.7,11.18,4.37C176.85,27.51,186.87,34.32,195.64,42.73z M75.85,22.5\n    c3.56-1.63,7.18-3.06,10.86-4.28c-7.05,8.39-13.2,19.51-18,32.53c-8.24-2.19-15.8-4.87-22.62-8.01\n    C54.81,34.36,64.79,27.57,75.85,22.5z M37.05,52.55c8.26,4.13,17.54,7.62,27.73,10.37c-4.47,15.84-7.03,33.35-7.52,51.64H12.91\n    C14.25,91.9,22.67,70.18,37.05,52.55z M12.91,127.29h44.35c0.49,18.29,3.05,35.75,7.52,51.59c-10.19,2.75-19.47,6.23-27.73,10.37\n    C22.67,171.62,14.25,149.95,12.91,127.29z M46.08,198.97c6.82-3.14,14.38-5.82,22.62-8.01c4.8,13.02,10.95,24.15,18,32.53\n    c-3.68-1.23-7.3-2.65-10.86-4.28C64.79,214.14,54.81,207.35,46.08,198.97z M165.74,219.27c-3.66,1.67-7.39,3.13-11.18,4.37\n    c7.12-8.42,13.32-19.63,18.16-32.76c8.27,2.2,16.02,4.93,22.92,8.09C186.87,207.39,176.85,214.2,165.74,219.27z M204.67,189.23\n    c-8.34-4.18-17.73-7.65-28.04-10.42c4.45-15.81,7.01-33.63,7.5-51.52h44.68C227.48,149.95,219.06,171.6,204.67,189.23z"
                }
            })])
        }
          , ji = []
          , Oi = {
            props: {
                color: {
                    type: String,
                    default: "#FFFFFF"
                }
            }
        }
          , Ii = Oi
          , ki = (n("4119"),
        Object(ge["a"])(Ii, Pi, ji, !1, null, "c08c3a28", null))
          , Di = ki.exports
          , zi = {
            components: {
                IconPlanet: Di
            },
            props: {
                color: {
                    type: String,
                    default: "#FFF"
                },
                classNames: {
                    type: Object,
                    default: function() {
                        return {}
                    },
                    validator: function(e) {
                        var t = !0;
                        return I()(e).forEach(function(e) {
                            t = t && ["hoverItem"].indexOf(e) > -1
                        }),
                        t
                    }
                }
            },
            data: function() {
                return {
                    langList: Bt,
                    isOpen: !1
                }
            },
            computed: {
                otherLangs: function() {
                    var e = this;
                    return this.langList.filter(function(t) {
                        return t !== e.currentLang
                    })
                },
                currentLang: function() {
                    return this.$route.params.lang
                }
            },
            watch: {
                isOpen: function(e) {
                    e && document.body.addEventListener("click", this.close)
                }
            },
            methods: {
                close: function() {
                    this.isOpen = !1,
                    document.body.removeEventListener("click", this.close)
                },
                getCurrentPage: function(e) {
                    var t = JSON.parse(pe()(this.$route.params));
                    t.slug = this.$t("".concat(this.$route.name, ".meta.url"), e);
                    var n = {
                        name: this.$route.name,
                        params: t
                    };
                    return n.params.lang = e,
                    n
                }
            }
        }
          , Ri = zi
          , Ni = (n("44a4"),
        Object(ge["a"])(Ri, Li, Ei, !1, null, "1b5b783b", null))
          , Bi = Ni.exports
          , Fi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("a", {
                staticClass: "website-link",
                attrs: {
                    href: "//soletanche-bachy.com/"
                }
            }, [n("svg", {
                staticClass: "icon",
                attrs: {
                    width: "11",
                    height: "11",
                    viewBox: "0 0 11 11"
                }
            }, [n("path", {
                staticClass: "cross",
                attrs: {
                    fill: "#fff",
                    "fill-rule": "evenodd",
                    d: "M5445,6272h1v11h-1v-11Zm6,5v1h-11v-1h11Z",
                    transform: "translate(-5440 -6272)"
                }
            })]), n("span", {
                staticClass: "first"
            }, [e._v("\n        " + e._s(e.$t("footer.returnA")) + "\n    ")]), n("span", {
                staticClass: "second"
            }, [e._v("\n        " + e._s(e.$t("footer.returnB")) + "\n    ")])])
        }
          , Ui = []
          , Gi = (n("d6bb"),
        {})
          , Hi = Object(ge["a"])(Gi, Fi, Ui, !1, null, "113dd4b5", null)
          , Wi = Hi.exports
          , Yi = {
            mixins: [C, Te],
            components: {
                AppSwitchLang: Bi,
                AppCorpoLink: Wi,
                ButtonScrollTop: ct
            },
            data: function() {
                return {
                    globalNav: $t.globalNav,
                    isMenuOpen: !1,
                    scrollToTop: !1
                }
            },
            computed: {
                color: function() {
                    return this.isMenuOpen || !this.globalNav.isIntro ? "#A7A7A7" : "#FFF"
                },
                links: function() {
                    var e = this
                      , t = this.$route.params.lang;
                    return Ht.filter(function(e) {
                        return e.meta && "project" === e.meta.type
                    }).map(function(n, a) {
                        return {
                            index: a,
                            title: e.$t(n.name + ".title"),
                            link: {
                                name: n.name,
                                params: {
                                    lang: t,
                                    slug: e.$t("".concat(n.name, ".meta.url"))
                                }
                            }
                        }
                    })
                }
            },
            watch: {
                $route: function() {
                    this.isMenuOpen = !1
                }
            },
            created: function() {
                this.lastScrollY = 0
            },
            methods: {
                onScroll: function(e) {
                    this.scrollToTop = e < this.lastScrollY || e <= 0,
                    this.lastScrollY = e
                },
                backToTop: function() {
                    $t.fadeToTop(this.resize.height)
                }
            }
        }
          , qi = Yi
          , Zi = (n("9e81"),
        Object(ge["a"])(qi, Ti, Si, !1, null, "240a7e04", null))
          , Xi = Zi.exports
          , Qi = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "menu",
                    duration: {
                        enter: 1625,
                        leave: 1e3
                    }
                }
            }, [n("nav", {
                staticClass: "menu",
                class: ["is-transition-" + e.state]
            }, [[n("div", {
                ref: "vline",
                staticClass: "vline"
            }, e._l(e.vLineList, function(e) {
                return n("div", {
                    staticClass: "item",
                    class: ["item-" + e],
                    style: {
                        top: 170 * e + "px"
                    }
                })
            }), 0), n("div", {
                ref: "hline",
                staticClass: "hline"
            }, e._l(e.hLineList, function(e) {
                return n("div", {
                    staticClass: "item",
                    class: ["item-" + e],
                    style: {
                        left: 170 * e + "px"
                    }
                })
            }), 0), n("div", {
                ref: "location",
                staticClass: "location-ref"
            }, [n("span", {
                ref: "circle",
                staticClass: "decoration-circle"
            }, [n("span", {
                ref: "physical",
                staticClass: "decoration-circle-physical"
            })]), n("div", {
                staticClass: "vertical"
            }, [n("span", {
                ref: "lattitude",
                staticClass: "lattitude"
            }, [e._v(e._s(e.lattitude))]), n("span", [e._v(", ")]), n("span", {
                ref: "longitude",
                staticClass: "longitude"
            }, [e._v(e._s(e.longitude))])]), n("div", {
                staticClass: "horizontal"
            }, [n("span", {
                ref: "lattitude",
                staticClass: "lattitude"
            }, [e._v(e._s(e.lattitude))]), n("span", [e._v(", ")]), n("span", {
                ref: "longitude",
                staticClass: "longitude"
            }, [e._v(e._s(e.longitude))])])]), n("div", {
                ref: "numbers",
                staticClass: "numbers"
            }, [n("div", {
                ref: "numbersMask",
                staticClass: "numbers-list"
            }, [n("span", {
                staticClass: "old",
                domProps: {
                    innerHTML: e._s(e.globalNav.projectCurrent + 1)
                }
            }), n("span", {
                staticClass: "new",
                domProps: {
                    innerHTML: e._s(e.globalNav.projectNext + 1)
                }
            }), n("div", {
                staticClass: "count-container"
            }, [n("span", {
                staticClass: "count-1",
                domProps: {
                    innerHTML: e._s(e.links.length)
                }
            }), n("span", {
                staticClass: "count-2",
                domProps: {
                    innerHTML: e._s(e.links.length)
                }
            })])])]), n("ul", {
                ref: "list",
                staticClass: "list"
            }, e._l(e.links, function(t) {
                var a;
                return n("li", {
                    staticClass: "item",
                    class: (a = {},
                    a["n" + (t.index + 1)] = !0,
                    a["is-selected"] = t.index === e.globalNav.projectNext,
                    a["is-move"] = e.globalNav.projectNext < t.index,
                    a)
                }, [n("router-link", {
                    ref: "link",
                    refInFor: !0,
                    staticClass: "link",
                    attrs: {
                        to: t.link
                    },
                    domProps: {
                        innerHTML: e._s(t.title)
                    }
                })], 1)
            }), 0)], n("transition", {
                attrs: {
                    mode: "out-in"
                }
            }, [n("h1", {
                key: e.links[e.globalNav.projectNext].index,
                staticClass: "phone-title",
                domProps: {
                    innerHTML: e._s(e.links[e.globalNav.projectNext].title)
                }
            })])], 2)])
        }
          , Vi = []
          , Ji = (n("28a5"),
        {
            mixins: [C],
            data: function() {
                return {
                    state: 0,
                    vLineList: [],
                    hLineList: [],
                    globalNav: $t.globalNav,
                    lattitude: 0,
                    longitude: 0
                }
            },
            computed: {
                links: function() {
                    var e = this
                      , t = this.$route.params.lang;
                    return Ht.filter(function(e) {
                        return e.meta && "project" === e.meta.type
                    }).map(function(n, a) {
                        return {
                            index: a,
                            title: e.$t(n.name + ".title"),
                            link: {
                                name: n.name,
                                params: {
                                    lang: t,
                                    slug: e.$t("".concat(n.name, ".meta.url"))
                                }
                            },
                            position: n.meta.position
                        }
                    })
                }
            },
            watch: {
                "globalNav.projectNext": "startGps"
            },
            created: function() {
                this.fade = 0,
                this.progress = 0,
                this.gpsPos = [0, 0]
            },
            mounted: function() {
                this.onResize(this.resize.width, this.resize.height),
                $t.onProjectFade.add(this.onProjectTransition)
            },
            destroyed: function() {
                $t.onProjectFade.remove(this.onProjectTransition)
            },
            methods: {
                onResize: function(e, t) {
                    this.vLineList = " ".repeat(Math.ceil(t / 170)).split("").map(function(e, t) {
                        return t + 1
                    }),
                    this.hLineList = " ".repeat(Math.ceil(e / 170)).split("").map(function(e, t) {
                        return t + 1
                    });
                    var n = -.2 * this.resize.width * ((3 - this.globalNav.projectNext) / 3)
                      , a = this.links[this.globalNav.projectNext].position;
                    this.lattitude = a[0].toFixed(3),
                    this.longitude = a[0].toFixed(3),
                    this.$refs.vline.style.transform = "translateY(0px) translateX(" + n + "px)",
                    this.$refs.location.style.transform = "translateX(" + n + "px)"
                },
                handleOver: function(e) {
                    var t = e.clientX
                      , n = e.clientY;
                    console.log(t, n)
                },
                handleEnter: function(e) {
                    var t = e.clientX
                      , n = e.clientY;
                    console.log(t, n)
                },
                startGps: function(e, t) {
                    var n = this
                      , a = [Math.random() * this.resize.width, Math.random() * this.resize.height];
                    this.gpsTween && this.gpsTween.remove();
                    var s = this.links[t].position
                      , i = this.links[e].position;
                    this.gpsTween = new de({
                        from: Object(T["a"])(this.gpsPos),
                        to: a,
                        duration: 4e3,
                        easing: [.5, 0, .5, 1]
                    }).onChange(function(a) {
                        n.gpsPos = a;
                        var r = n.fade
                          , o = -.2 * n.resize.width * ((3 - ((1 - r) * t + r * e)) / 3);
                        n.lattitude = ((1 - r) * s[0] + r * i[0]).toFixed(3),
                        n.longitude = ((1 - r) * s[1] + r * i[1]).toFixed(3),
                        n.$refs.vline.style.transform = "translateY(" + 1.7 * (a[0] % 100 - 100).toFixed(1) + "px) translateX(" + o + "px)",
                        n.$refs.location.style.transform = "translateX(" + o + "px)",
                        n.$refs.hline.style.transform = "translateX(" + 1.7 * (a[1] % 100 - 100).toFixed(1) + "px)"
                    }).onEnd(function(t) {
                        n.gpsPos = t;
                        var a = n.links[e].position;
                        n.lattitude = a[0].toFixed(3),
                        n.longitude = a[1].toFixed(3);
                        var s = -.2 * n.resize.width * ((3 - e) / 3);
                        n.$refs.vline.style.transform = "translateY(" + 1.7 * (t[0] % 100 - 100).toFixed(1) + "px) translateX(" + s + "px)",
                        n.$refs.location.style.transform = "translateX(" + s + "px)",
                        n.$refs.hline.style.transform = "translateX(" + 1.7 * (t[1] % 100 - 100).toFixed(1) + "px)"
                    })
                },
                onProjectTransition: function(e) {
                    this.fade = e;
                    var t = $t.getGrid()
                      , n = (this.resize.height * (1 - t.yLimit)).toFixed(1) + "px";
                    this.$refs.numbers.style.transform = "translateY(" + n + ") translateY(-100%)",
                    this.$refs.numbersMask.style.transform = "translateY(-" + n + ") translateY(100%)",
                    this.state = Math.ceil(4 * e),
                    t.project === this.globalNav.projectCurrent && (this.state = 0)
                }
            }
        })
          , Ki = Ji
          , $i = (n("60aa"),
        Object(ge["a"])(Ki, Qi, Vi, !1, null, "38b8a512", null))
          , er = $i.exports
          , tr = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.globalNav.isIntroElements ? n("div", {
                staticClass: "footer",
                attrs: {
                    duration: {
                        enter: 1e3,
                        leave: 2e3
                    }
                }
            }, [n("app-corpo-link"), n("app-switch-lang", {
                staticClass: "switch-lang"
            })], 1) : e._e()
        }
          , nr = []
          , ar = {
            components: {
                AppSwitchLang: Bi,
                AppCorpoLink: Wi
            },
            data: function() {
                return {
                    globalNav: $t.globalNav
                }
            }
        }
          , sr = ar
          , ir = (n("70c0"),
        Object(ge["a"])(sr, tr, nr, !1, null, "f485fba6", null))
          , rr = ir.exports
          , or = {
            router: Wt,
            mixins: [C],
            components: {
                AppBg: ti,
                AppPrevNext: oi,
                AppNav: er,
                AppLoader: hi,
                AppModalVideo: bi,
                AppFooter: rr,
                AppMobileNav: _i,
                AppMobileMenu: Xi
            },
            data: function() {
                return {
                    globalNav: $t.globalNav,
                    display3D: !1
                }
            },
            computed: {
                chapter: function() {
                    var e = this;
                    return this.$t(Ht.find(function(t) {
                        return t.meta && "project" === t.meta.type && t.meta.project === e.globalNav.projectCurrent
                    }).name + ".meta.chapter")
                }
            },
            watch: {
                $route: "onRouteChange",
                "$route.params.lang": {
                    handler: function(e) {
                        this.$i18n.locale = e,
                        document.firstElementChild.setAttribute("lang", e)
                    },
                    immediate: !0
                }
            },
            created: function() {
                var e = this;
                console.log("\n%cSoletanche Bachy\n%cBy Immersive Garden", "color: #1F56FB; font-size: x-large; font-weight: bold;", "color: #A7A7AB;"),
                console.log("%cFront-end framework: %cVue.js", "color: #A7A7AB;", "color: #1F56FB;"),
                console.log("%cWebGL library: %cThree.js", "color: #A7A7AB;", "color: #1F56FB;"),
                this.onRouteChange(this.$route),
                $t.onIntroReady.addOnce(function() {
                    return e.display3D = !0
                })
            },
            mounted: function() {
                this.onResized(this.resize.width, this.resize.height)
            },
            methods: {
                onResized: function(e, t) {
                    var n = .01 * t;
                    window.document.documentElement.style.setProperty("--vh", "".concat(n, "px"))
                },
                onRouteChange: function(e) {
                    var t = this.$t(e.name + ".meta.title")
                      , n = this.$t(e.name + ".meta.description");
                    this.setMeta(t, n),
                    void 0 !== e.meta.project && $t.fadeToProject(Number(e.meta.project))
                },
                setMeta: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Soletanche"
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    window.document.title = e;
                    var n = window.document.querySelector("meta[name=description]");
                    n && n.setAttribute("content", t)
                }
            }
        }
          , lr = or
          , cr = (n("8282"),
        Object(ge["a"])(lr, m, h, !1, null, "af1d03ea", null))
          , ur = cr.exports
          , dr = new a["a"];
        a["a"].mixin({
            data: function() {
                return {
                    eventHub: dr
                }
            }
        });
        n("4a95");
        a["a"].use(s["a"]),
        new a["a"]({
            el: "#app",
            render: function(e) {
                return e(ur)
            },
            i18n: d
        })
    },
    5883: function(e, t, n) {},
    "5c97": function(e, t) {
        e.exports = "#define GLSLIFY 1\n// https://github.com/mattdesl/glsl-fxaa\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\nuniform sampler2D map;\nuniform vec2 screenSize;\n\nvarying vec2 vfragCoord;\n\n// FXAA\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution, vec2 v_rgbNW, vec2 v_rgbNE, vec2 v_rgbSW, vec2 v_rgbSE, vec2 v_rgbM)\n{\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n\n    return color;\n}\n\nvoid main()\n{\n    gl_FragColor = fxaa(map, vfragCoord, screenSize, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}"
    },
    "5f34": function(e, t, n) {
        "use strict";
        var a = n("69fd")
          , s = n.n(a);
        s.a
    },
    "60aa": function(e, t, n) {
        "use strict";
        var a = n("4e64")
          , s = n.n(a);
        s.a
    },
    "619c": function(e, t, n) {
        e.exports = n.p + "assets/img/arrow-top-white.5974d83a.svg"
    },
    "61b2": function(e, t, n) {},
    "620a": function(e, t, n) {
        "use strict";
        var a = n("7026")
          , s = n.n(a);
        s.a
    },
    "64f7": function(e, t, n) {},
    "69fd": function(e, t, n) {},
    "6b6c": function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// Soletanche\nuniform sampler2D dirt;\nvarying vec3 vWorldPosition;\n\nvoid main()\n{\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec2 uvProcedural = mod(vec2(vWorldPosition.x + vWorldPosition.z, vWorldPosition.y - vWorldPosition.z), 1.0);\n\treflectedLight.directDiffuse += texture2D(dirt, uvProcedural * 2.0).r / 10.0;\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n    gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}"
    },
    "6c7a": function(e, t, n) {},
    "6df4": function(e, t, n) {},
    7026: function(e, t, n) {},
    7045: function(e, t, n) {
        e.exports = n.p + "assets/img/cloud-3.bb349894.jpg"
    },
    "70c0": function(e, t, n) {
        "use strict";
        var a = n("7c70")
          , s = n.n(a);
        s.a
    },
    "70c7": function(e, t, n) {},
    "71aa": function(e, t, n) {
        "use strict";
        var a = n("f1c0")
          , s = n.n(a);
        s.a
    },
    "727b": function(e, t, n) {
        e.exports = n.p + "assets/img/prefabriques-deck-on-pile.32ce1117.jpg"
    },
    "74d4": function(e, t, n) {
        "use strict";
        var a = n("236c")
          , s = n.n(a);
        s.a
    },
    "760f": function(e, t, n) {
        e.exports = n.p + "assets/3d/dedcb03c0ab8f8c12669852afe64572e.glb"
    },
    "771f": function(e, t) {
        e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform vec3 centerColor;\nuniform vec3 cornersColor;\nuniform float centerOpacity;\nuniform float cornersOpacity;\n\nvoid main()\n{\n    gl_Position = vec4(position.xy * 2.0, 1.0, 1.0);\n\n    // Align top\n    vUv = uv; // vec2(0.0, 1.0) - (vec2(0.0, 1.0) - uv) * screenSize / textureSize;\n\n    // Align middle\n    // vUv = uv * screenSize / textureSize;\n}"
    },
    7794: function(e, t, n) {
        e.exports = n.p + "assets/img/video-cover.e6ae96b6.jpg"
    },
    "7c70": function(e, t, n) {},
    "7d85": function(e, t, n) {
        "use strict";
        var a = n("ab6f")
          , s = n.n(a);
        s.a
    },
    8027: function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// Soletanche\nuniform sampler2D map;\nvarying vec2 vUv;\n\nvoid main()\n{\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\tvec4 color = texture2D(map, vUv);\n\toutgoingLight.rgb = vec3(1.0);\n\tdiffuseColor.a = color.a;\n\n    gl_FragColor = vec4(vec3(1.0), color.r);\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}"
    },
    8282: function(e, t, n) {
        "use strict";
        var a = n("fbb5")
          , s = n.n(a);
        s.a
    },
    "83ae": function(e, t) {
        e.exports = "data:image/jpeg;base64,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"
    },
    "897c": function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "8ba7": function(e, t, n) {
        "use strict";
        var a = n("70c7")
          , s = n.n(a);
        s.a
    },
    "8bd4": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEFJREFUeNrMkrEJADAMw2wn/1/RpRfkvd6gIVDvQmDkc0dkbQkCMQSgogOJTmXZ4FADBaq0bDC+VfksjcBY9QQYAOWQAnpwNDcOAAAAAElFTkSuQmCC"
    },
    "8efb": function(e, t, n) {
        e.exports = n.p + "assets/img/logo-small-white-4x.54863c66.png"
    },
    "909a": function(e, t, n) {},
    "971a": function(e, t, n) {
        e.exports = n.p + "assets/img/arrow-next-black.201ea56b.svg"
    },
    "985b": function(e, t, n) {
        e.exports = n.p + "assets/img/arrow-top-red.7af8d365.svg"
    },
    9945: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec2 screenSize;\nuniform vec2 uPos;\nuniform vec2 uSize;\nuniform vec2 uUvPos;\nuniform vec2 uUvSize;\n\n#ifdef USE_MAP\n    varying vec2 vUv;\n#endif\n\nvoid main()\n{\n    gl_Position = vec4((uPos + position.xy * uSize) * 2.0 - vec2(1.0), 1.0, 1.0);\n        \n    #ifdef USE_MAP\n        vUv = (uv * uUvSize) + uUvPos;\n    #endif\n}"
    },
    "99b0": function(e, t, n) {
        e.exports = n.p + "assets/img/logo-white-4x.d4a85b82.png"
    },
    "9a9b": function(e, t, n) {
        e.exports = n.p + "assets/img/waves-caustics.b32db0e4.jpg"
    },
    "9b34": function(e, t, n) {
        e.exports = n.p + "assets/img/ground-diffuse.49ef7a0e.jpg"
    },
    "9e81": function(e, t, n) {
        "use strict";
        var a = n("e963")
          , s = n.n(a);
        s.a
    },
    "9efc": function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec2 screenSize;\nuniform vec2 textureSize;\nvarying vec2 vUv;\n\nvoid main()\n{\n    gl_Position = vec4(position.xy * 2.0, 1.0, 1.0);\n\n    // Align top\n    vUv = vec2(0.0, 1.0) - (vec2(0.0, 1.0) - uv) * screenSize / textureSize;\n\n    // Align middle\n    // vUv = uv * screenSize / textureSize;\n}"
    },
    a00e: function(e, t, n) {
        "use strict";
        var a = n("e758")
          , s = n.n(a);
        s.a
    },
    a291: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform float time;\nuniform vec2 uZDeform;\nuniform float uDisplace;\n\nvarying vec3 vColor;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex \n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n// \n\n//  Simplex 4D Noise \n//\tby Ian McEwan, Ashima Arts\n//\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nfloat permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nfloat taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nvec4 grad4(float j, vec4 ip){\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; \n\n  return p;\n}\n\nfloat snoise(vec4 v){\n  const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4\n                        0.309016994374947451); // (sqrt(5) - 1)/4   F4\n// First corner\n  vec4 i  = floor(v + dot(v, C.yyyy) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C \n  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\n  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\n  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\n  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;\n\n// Permutations\n  i = mod(i, 289.0); \n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n// Gradients\n// ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n}\n\nvoid main()\n{\n    vec3 pos = position + normalize(normal) * uDisplace;\n    vec4 vScreenPos = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n\n    float xPos = (vScreenPos.x * 0.5 / vScreenPos.w) + 0.5;\n    float yPos = (vScreenPos.y * 0.5 / vScreenPos.w) + 0.5;\n    float zPos = (vScreenPos.z + uZDeform.x) * uZDeform.y;\n\n    float pw = snoise(vec4(\n        zPos * 1.0,\n        xPos * 1.0,\n        yPos * 1.0,\n        time * 0.2\n    )) * 0.5 + 0.5;\n        \n    vColor = mix(\n        vec3(0.0, 0.0, 0.5),\n        vec3(1.5, 0.5, 0.0),\n        pw\n    );\n    // vColor = vec3(zPos); // test Z limit\n\n    gl_Position = vScreenPos;\n}"
    },
    a99d: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEBJREFUeNq0krERACAQwiDv/oNYOIHDOUMK6XPAQfe5MVpNJEAlUAmABnDA6A7WwUeafHbwO5Tv13ClkWfNE2AAHb4CjqHrl5IAAAAASUVORK5CYII="
    },
    aa66: function(e, t, n) {
        e.exports = n.p + "assets/img/t219-orchard-station-tunnels.594bbf03.jpg"
    },
    ab6f: function(e, t, n) {},
    ac8c: function(e, t, n) {
        "use strict";
        var a = n("4aad")
          , s = n.n(a);
        s.a
    },
    addc: function(e, t, n) {
        e.exports = n.p + "assets/3d/8be1dee63c5375284fa01dd32ecc53d6.glb"
    },
    ae1a: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-white-5x.aeb42a8e.png"
    },
    b02b: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec2 screenSize;\n\nvarying vec2 vfragCoord;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvoid texcoords(vec2 fragCoord, vec2 resolution, out vec2 v_rgbNW, out vec2 v_rgbNE, out vec2 v_rgbSW, out vec2 v_rgbSE, out vec2 v_rgbM)\n{\n\tvec2 inverseVP = 1.0 / resolution.xy;\n\tv_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n\tv_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n\tv_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n\tv_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n\tv_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main()\n{\n    vfragCoord = uv * screenSize;\n    texcoords(vfragCoord, screenSize, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n    gl_Position = vec4(position.xy, 1.0, 1.0);\n}"
    },
    b5fb: function(e, t, n) {
        e.exports = n.p + "assets/img/ground-normal.86bc7ec9.jpg"
    },
    b6fd: function(e, t, n) {
        "use strict";
        var a = n("6c7a")
          , s = n.n(a);
        s.a
    },
    b98a: function(e, t, n) {
        e.exports = n.p + "assets/img/gdansk-museum-2-world-war.049ef214.jpg"
    },
    bb28: function(e, t, n) {
        e.exports = n.p + "assets/img/arrow-down-white.df156849.svg"
    },
    bb7b: function(e, t, n) {
        e.exports = n.p + "assets/img/gdansk-museum-2-world-war-fouille.e8968ef5.jpg"
    },
    c081: function(e, t, n) {
        e.exports = n.p + "assets/img/t219-link-subway-jacking-shaft.94684d14.jpg"
    },
    c0d7: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-small-color-5x.3ef8016b.png"
    },
    c89e: function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 diffuseDark;\nuniform float diffuseSlider;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// Soletanche\nvarying vec3 vColorCity;\nvarying vec3 vOriginalPosition;\n\nuniform float time;\n\nvoid main()\n{\n\t// IG\n\tvec2 uvProcedural = mod(vec2(vOriginalPosition.x + vOriginalPosition.z, vOriginalPosition.y - vOriginalPosition.z), 1.0);\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( mix(diffuse, diffuseDark, diffuseSlider), opacity );\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\n    diffuseColor.rgb *= vColorCity;\n\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\n\t// #include <normal_fragment_maps>\n\n\t#include <emissivemap_fragment>\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\toutgoingLight.rgb *= texture2D(map, uvProcedural).rgb;\n\n    gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}"
    },
    d3f44: function(e, t, n) {
        e.exports = n.p + "assets/img/shadow.1251fa82.png"
    },
    d5e8: function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// Soletanche\nuniform float time;\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nvoid main()\n{\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n    vPosition = vec3(modelMatrix * vec4(position, 1.0)).xyz;\n\tvUv = uv;\n}"
    },
    d6bb: function(e, t, n) {
        "use strict";
        var a = n("37c3")
          , s = n.n(a);
        s.a
    },
    da5d: function(e, t) {
        e.exports = "#define GLSLIFY 1\nvarying vec2 vUv;\n\nuniform vec3 centerColor;\nuniform vec3 cornersColor;\nuniform float centerOpacity;\nuniform float cornersOpacity;\n\nvoid main()\n{\n    float power = distance(vUv, vec2(0.5, 0.5));\n    gl_FragColor = vec4(\n        mix(centerColor, cornersColor, power),\n        mix(centerOpacity, cornersOpacity, power)\n    );\n}"
    },
    dbb8: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-color-4x.d09ed67e.png"
    },
    dbfc: function(e, t, n) {
        e.exports = n.p + "assets/img/cross-mult-red.e006c589.svg"
    },
    dcf8: function(e, t) {
        e.exports = "#define GLSLIFY 1\nuniform sampler2D map;\n\nuniform vec2 screenSize;\nvarying vec2 vUv;\n\nvoid main()\n{\n    // RGB offset\n    float dist = distance(vUv, vec2(0.5));\n    vec2 onePixel = vec2(1.0, 1.0) / screenSize;\n\n    gl_FragColor = vec4(\n        texture2D(map, vUv - onePixel * vec2(dist * 1.0 + 1.0, 0.0)).r,\n        texture2D(map, vUv).g,\n        texture2D(map, vUv + onePixel * vec2(dist * 1.0 + 1.0, 0.0)).b,\n        1.0);\n}"
    },
    e069: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-small-color-4x.ed19372e.png"
    },
    e758: function(e, t, n) {},
    e963: function(e, t, n) {},
    ec62: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-color-5x.62037924.png"
    },
    ecb2: function(e, t, n) {
        "use strict";
        var a = n("909a")
          , s = n.n(a);
        s.a
    },
    ef80: function(e, t, n) {
        e.exports = n.p + "assets/img/logo-color-2x.e9f9656d.png"
    },
    f1c0: function(e, t, n) {},
    f266: function(e, t) {
        e.exports = "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex \n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n// \n\nvec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{ \n    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    // First corner\n    vec3 i  = floor(v + dot(v, C.yyy) );\n    vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n    // Other corners\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min( g.xyz, l.zxy );\n    vec3 i2 = max( g.xyz, l.zxy );\n\n    //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n    //   x1 = x0 - i1  + 1.0 * C.xxx;\n    //   x2 = x0 - i2  + 2.0 * C.xxx;\n    //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n    vec3 x1 = x0 - i1 + C.xxx;\n    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n    // Permutations\n    i = mod289(i); \n    vec4 p = permute( permute( permute( \n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n    // Gradients: 7x7 points over a square, mapped onto an octahedron.\n    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n    float n_ = 0.142857142857; // 1.0/7.0\n    vec3  ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4( x.xy, y.xy );\n    vec4 b1 = vec4( x.zw, y.zw );\n\n    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    //Normalise gradients\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    // Mix final noise value\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\n#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// Soletanche\nuniform vec3 waterColor;\nuniform float waterHeight;\nuniform float waterY;\nuniform float waterOpacity;\n\nuniform float causticSize;\n\nuniform vec3 cityColor;\nuniform float cityHeight;\nuniform float cityY;\nuniform float cityAlpha;\n\nuniform float time;\nuniform float wavePower;\nuniform float waveVelocity;\nuniform vec2 waveDistance;\n\nvarying vec3 vColorCity;\nvarying vec4 vPosition;\n// varying vec3 vModelPosition;\nvarying vec3 vOriginalPosition;\n\nvoid main()\n{\n    vec3 cityPosition = vec3(modelMatrix * vec4(position, 1.0)).xyz;\n\n    // Water\n    float waterPower = waterY - cityPosition.y * waterHeight;\n    float water = 1.0 - clamp(waterPower, 0.0, waterOpacity);\n\n    // Height depth\n    float height = clamp(cityY - cityPosition.y * cityHeight, 0.0, 1.0);\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n    vOriginalPosition = transformed.xyz;\n    vec3 vModelPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;\n    vPosition = vec4(vModelPosition, waterPower);\n    vPosition.xyz *= causticSize;\n\n    float waveAlpha = snoise(vModelPosition * 50.0 + vec3(time * 0.0987, time * 0.123, -time * 0.759));\n    vPosition.w *= clamp(waveAlpha, 0.01, 0.9);\n\n\tvColorCity = vec3(1.0, 1.0, 1.0);\n\tvColorCity = mix(vColorCity, cityColor, height * cityAlpha);\n\tvColorCity = mix(waterColor, vColorCity, water);\n}"
    },
    f285: function(e, t, n) {
        "use strict";
        var a = n("1d31")
          , s = n.n(a);
        s.a
    },
    f81e: function(e, t) {
        e.exports = "#define GLSLIFY 1\nvarying vec3 vColor;\n\nvoid main()\n{\n    gl_FragColor = vec4(\n        vColor,\n        1.0\n    );\n}\n"
    },
    f917: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    fb79: function(e, t) {
        e.exports = "data:image/jpeg;base64,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"
    },
    fbb5: function(e, t, n) {},
    fdba: function(e, t) {
        e.exports = "#define GLSLIFY 1\n#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 diffuseDark;\nuniform float diffuseSlider;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n\n// #include <normalmap_pars_fragment>\n#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( uv.st );\n\t\t\tvec2 st1 = dFdy( uv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, uv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif\n\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\n// Soletanche\nvarying vec3 vColorCity;\nvarying vec4 vPosition;\nvarying vec3 vOriginalPosition;\n\nuniform float time;\n\nvoid main()\n{\n\t// IG\n\tvec2 uvProcedural = mod(vec2(vOriginalPosition.x + vOriginalPosition.z, vOriginalPosition.y - vOriginalPosition.z), 1.0);\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( mix(diffuse, diffuseDark, diffuseSlider), opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\n    diffuseColor.rgb *= vColorCity;\n\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\n\t// #include <normal_fragment_maps>\n\n\t// Custom normal\n\t\t#ifdef USE_NORMALMAP\n\t\t\t// normal = perturbNormal2Arb( -vViewPosition, normal );\n\t\t\tnormal = perturbNormal2Arb( -vPosition.xyz, normal, uvProcedural * 6.0 );\n\t\t#endif\n\t\t/* #ifdef USE_NORMALMAP\n\t\t\t#ifdef OBJECTSPACE_NORMALMAP\n\t\t\t\tnormal = texture2D( normalMap, uvProcedural2 ).xyz * 2.0 - 1.0;\n\t\t\t\t#ifdef FLIP_SIDED\n\t\t\t\t\tnormal = - normal;\n\t\t\t\t#endif\n\t\t\t\t#ifdef DOUBLE_SIDED\n\t\t\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\t\t#endif\n\t\t\t\tnormal = normalize( normalMatrix * normal );\n\t\t\t#else\n\t\t\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t\t\t#endif\n\t\t#elif defined( USE_BUMPMAP )\n\t\t\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\t\t#endif */\n\t// Custom normal\n\n\t#include <emissivemap_fragment>\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\toutgoingLight.rgb *= texture2D(map, uvProcedural).rgb;\n\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a);\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}"
    }
});
