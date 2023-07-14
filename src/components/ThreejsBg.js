'use client'

import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import {OrbitControls} from '/node_modules/three/examples/jsm/controls/OrbitControls.js'

export default function ThreejsBg() {

    const canvasParentRef = useRef(null)

    useEffect(() => {


        class ThreejsInstance {
            constructor() {
                this._Init()
            }
            
            _Init() {
                this._scene = new THREE.Scene()
                this._threejs = new THREE.WebGLRenderer()
                this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
                this._camera.position.set(25, 10, 25);

                this._threejs.setSize(window.innerWidth, window.innerHeight)
                canvasParentRef.current.appendChild( this._threejs.domElement );

                this._orbitControls = new OrbitControls(this._camera, canvasParentRef.current)
                this._orbitControls.update()

                this._scene.background = new THREE.Color(0xffffff)

                this._AddBoxGeometry()

                this._RAF()
            }

            _AddBoxGeometry() {
                const geometry = new THREE.BoxGeometry(10, 10, 10)
                const material = new THREE.MeshBasicMaterial({ color: 0x8a0c1b })
                const box = new THREE.Mesh(geometry, material)
                this._scene.add(box)
            }

            _RAF() {
                requestAnimationFrame(() => {
                    this._threejs.render(this._scene, this._camera)
                    this._orbitControls.update()
                    this._RAF()
                })
            }
        }
        
        const _APP = new ThreejsInstance()

        return () => {
            this._threejs.dispose();
            if (canvasParentRef.current) {
                canvasParentRef.current.removeChild(renderer.domElement)
            }
        };
    })
    return (
        <div ref={canvasParentRef}></div>
    )
}