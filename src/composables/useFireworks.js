import { ref, onMounted, onUnmounted } from 'vue'

export function useFireworks(canvasRef) {
  const rockets = ref([])
  const particles = ref([])
  const animationId = ref(null)
  const ctx = ref(null)
  
  const colors = ['#ff69b4', '#ff1493', '#ff85c1', '#ffc0cb', '#ff6ec7', '#ff4da6', '#ff99cc']

  class Rocket {
    constructor(x, canvasHeight, canvasWidth) {
      this.startX = x
      this.x = x
      this.y = canvasHeight
      this.targetY = Math.random() * (canvasHeight * 0.3) + 50
      this.targetX = x + (Math.random() - 0.5) * 300
      this.speed = 5
      this.exploded = false
      this.trail = []
      this.color = '#ff69b4'
      this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x)
    }

    draw(context) {
      if (!this.exploded) {
        context.strokeStyle = this.color
        context.lineWidth = 2
        context.beginPath()
        for (let i = 0; i < this.trail.length; i++) {
          const alpha = i / this.trail.length
          context.globalAlpha = alpha
          if (i === 0) {
            context.moveTo(this.trail[i].x, this.trail[i].y)
          } else {
            context.lineTo(this.trail[i].x, this.trail[i].y)
          }
        }
        context.stroke()
        context.globalAlpha = 1

        context.fillStyle = this.color
        context.beginPath()
        context.arc(this.x, this.y, 3, 0, Math.PI * 2)
        context.fill()
      }
    }

    update() {
      if (!this.exploded) {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.trail.push({ x: this.x, y: this.y })
        if (this.trail.length > 20) {
          this.trail.shift()
        }
        
        const distance = Math.sqrt(
          Math.pow(this.targetX - this.x, 2) + 
          Math.pow(this.targetY - this.y, 2)
        )
        
        if (distance < 10 || this.y <= this.targetY) {
          this.exploded = true
          return { exploded: true, x: this.x, y: this.y }
        }
      }
      return { exploded: false }
    }
  }

  class Particle {
    constructor(x, y, color) {
      this.x = x
      this.y = y
      this.color = color
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 4 + 2
      this.velocity = {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      }
      this.alpha = 1
      this.decay = Math.random() * 0.02 + 0.01
      this.size = Math.random() * 3 + 2
      this.gravity = 0.05
    }

    draw(context) {
      context.save()
      context.globalAlpha = this.alpha
      context.fillStyle = this.color
      context.beginPath()
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      context.fill()
      
      context.shadowBlur = 10
      context.shadowColor = this.color
      context.fill()
      context.restore()
    }

    update() {
      this.velocity.y += this.gravity
      this.x += this.velocity.x
      this.y += this.velocity.y
      this.alpha -= this.decay
    }
  }

  const createExplosion = (x, y) => {
    const particleCount = 80
    const color = colors[Math.floor(Math.random() * colors.length)]
    
    for (let i = 0; i < particleCount; i++) {
      particles.value.push(new Particle(x, y, color))
    }
  }

  const launchRocket = (canvas) => {
    const x = Math.random() * (canvas.width - 100) + 50
    rockets.value.push(new Rocket(x, canvas.height, canvas.width))
  }

  const animate = () => {
    if (!canvasRef.value || !ctx.value) return

    const canvas = canvasRef.value
    ctx.value.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.value.fillRect(0, 0, canvas.width, canvas.height)

    // Update rockets
    for (let i = rockets.value.length - 1; i >= 0; i--) {
      const result = rockets.value[i].update()
      rockets.value[i].draw(ctx.value)
      
      if (result.exploded) {
        createExplosion(result.x, result.y)
      }
      
      if (rockets.value[i].exploded && rockets.value[i].trail.length === 0) {
        rockets.value.splice(i, 1)
      }
    }

    // Update particles
    for (let i = particles.value.length - 1; i >= 0; i--) {
      particles.value[i].update()
      particles.value[i].draw(ctx.value)
      
      if (particles.value[i].alpha <= 0) {
        particles.value.splice(i, 1)
      }
    }

    animationId.value = requestAnimationFrame(animate)
  }

  const initCanvas = () => {
    if (!canvasRef.value) return

    const canvas = canvasRef.value
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.value = canvas.getContext('2d')
  }

  const handleResize = () => {
    if (canvasRef.value) {
      canvasRef.value.width = window.innerWidth
      canvasRef.value.height = window.innerHeight
    }
  }

  let launchInterval = null

  onMounted(() => {
    initCanvas()
    animate()

    window.addEventListener('resize', handleResize)

    // Launch initial rockets
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          if (canvasRef.value) {
            launchRocket(canvasRef.value)
          }
        }, i * 400)
      }
    }, 500)

    // Auto launch rockets
    launchInterval = setInterval(() => {
      if (canvasRef.value) {
        launchRocket(canvasRef.value)
      }
    }, 1500)
  })

  onUnmounted(() => {
    if (animationId.value) {
      cancelAnimationFrame(animationId.value)
    }
    if (launchInterval) {
      clearInterval(launchInterval)
    }
    window.removeEventListener('resize', handleResize)
  })

  return {
    rockets,
    particles
  }
}