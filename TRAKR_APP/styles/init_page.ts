import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root {
      --primary: #8bcdf2;
--muted: #d3d3d3;
--ink: #0f172a;
--bg: #0b1020;
--card: #0f152c;
--accent: #4aa7da;
--success: #22c55e;
--warning: #f59e0b;
--danger: #ef4444;
--glass: rgba(255, 255, 255, 0.06);
--shadow: 0 10px 30px rgba(0, 0, 0, .35);
--radius - xl: 24px;
--radius - lg: 18px;
--radius - md: 12px;
--radius - sm: 10px;
    }

    * {
  box- sizing: border - box
    }

html,
  body {
  height: 100 %
    }

    body {
  margin: 0;
  font - family: ui - sans - serif, system - ui, -apple - system, Segoe UI, Roboto, "Helvetica Neue", Arial;
  color: #e8f1ff;
  background: radial - gradient(1200px 1200px at 10 % 10 %, rgba(139, 205, 242, .15), transparent 60 %), radial - gradient(900px 900px at 90 % 20 %, rgba(211, 211, 211, .12), transparent 60 %), radial - gradient(1000px 1000px at 70 % 90 %, rgba(139, 205, 242, .09), transparent 60 %), var(--bg);
  overflow - x: hidden;
}

    .blob {
  position: fixed;
  filter: blur(60px);
  opacity: .25;
  z - index: 0;
  animation: blobFloat 20s ease -in -out infinite;
}

    .blob.b1 {
  background: var(--primary);
  width: 380px;
  height: 380px;
  top: -120px;
  left: -80px;
  border - radius: 50 %
    }

    .blob.b2 {
  background: var(--muted);
  width: 320px;
  height: 320px;
  bottom: -140px;
  right: -60px;
  border - radius: 50 %;
  animation - duration: 26s
}

    .blob.b3 {
  background: var(--accent);
  width: 260px;
  height: 260px;
  top: 40 %;
  left: -100px;
  border - radius: 50 %;
  animation - duration: 23s
}

@keyframes blobFloat {

  0 %,
    100 % {
      transform: translate(0, 0)
    }

  50 % {
    transform: translate(40px, -30px)
  }
}

    header {
  position: sticky;
  top: 0;
  z - index: 50;
  backdrop - filter: blur(8px);
  background: linear - gradient(180deg, rgba(11, 16, 32, .75), rgba(11, 16, 32, .35) 60 %, transparent);
  border - bottom: 1px solid rgba(255, 255, 255, .06)
}

    .nav {
  max - width: 1200px;
  margin: auto;
  display: flex;
  align - items: center;
  justify - content: space - between;
  padding: 14px 22px;
}

    .brand {
  display: flex;
  align - items: center;
  gap: 12px;
  text - decoration: none;
  color: var(--primary)
}

    .logo {
  width: 42px;
  height: 42px;
  border - radius: 12px;
  background: linear - gradient(135deg, var(--primary), var(--muted));
  display: grid;
  place - items: center;
  box - shadow: var(--shadow)
}

    .logo svg {
  width: 28px;
  height: 28px;
  fill: #0a0f1f;
  filter: drop - shadow(0 4px 10px rgba(0, 0, 0, .25))
}

    .wordmark {
  font - weight: 800;
  letter - spacing: .12em;
  font - size: 20px
}

    .navlinks {
  display: flex;
  gap: 14px;
  flex - wrap: wrap
}

    .chip {
  padding: 10px 14px;
  border - radius: 999px;
  border: 1px solid rgba(255, 255, 255, .08);
  background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .03));
  color: #e9f6ff;
  text - decoration: none;
  font - weight: 600;
  font - size: 14px;
  transition: .25s transform, .25s border, .25s background;
}

    .chip:hover {
  transform: translateY(-2px);
  border - color: var(--primary);
  background: linear - gradient(180deg, rgba(139, 205, 242, .25), rgba(255, 255, 255, .04))
}

    .hero {
  max - width: 1200px;
  margin: 32px auto;
  padding: 24px;
  display: grid;
  grid - template - columns: 1.15fr .85fr;
  gap: 22px;
  align - items: stretch;
  position: relative;
  z - index: 1
}

    .panel {
  background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02));
  border: 1px solid rgba(255, 255, 255, .08);
  border - radius: var(--radius - xl);
  box - shadow: var(--shadow);
  overflow: hidden;
  position: relative;
}

    /* Animated header ribbon */
    .ribbon {
  position: absolute;
  inset: 0;
  pointer - events: none;
  background: conic - gradient(from 180deg, transparent 0 30 %, rgba(139, 205, 242, .25) 30 % 60 %, transparent 60 % 100 %);
  mask: linear - gradient(transparent, white 15 % 85 %, transparent);
  animation: ribbonSpin 12s linear infinite;
}

@keyframes ribbonSpin {
      to {
    transform: rotate(360deg)
  }
}

    .hero - left {
  padding: 26px 28px 30px
}

    .kicker {
  display: inline - flex;
  gap: 10px;
  align - items: center;
  padding: 6px 10px;
  border - radius: 999px;
  border: 1px solid rgba(255, 255, 255, .1);
  background: rgba(139, 205, 242, .1);
  color: #cfefff;
  font - weight: 700;
  text - transform: uppercase;
  font - size: 12px;
  letter - spacing: .1em
}

    .kicker.dot {
  width: 8px;
  height: 8px;
  border - radius: 50 %;
  background: var(--success);
  box - shadow: 0 0 0 0 rgba(34, 197, 94, .6);
  animation: pulse 2s infinite
}

@keyframes pulse {
  0 % {
    box- shadow: 0 0 0 0 rgba(34, 197, 94, .6)
}

70 % {
  box- shadow: 0 0 0 16px rgba(34, 197, 94, 0)
      }

100 % {
  box- shadow: 0 0 0 0 rgba(34, 197, 94, 0)
      }
    }

    h1 {
  margin: 14px 0 8px;
  font - size: 44px;
  line - height: 1.1
}

    .sub {
  opacity: .85;
  margin - bottom: 18px
}

    .cta - row {
  display: flex;
  gap: 12px;
  flex - wrap: wrap;
  margin: 18px 0 6px
}

    .btn {
  padding: 12px 16px;
  border - radius: 14px;
  border: 1px solid rgba(255, 255, 255, .12);
  background: linear - gradient(180deg, rgba(139, 205, 242, .35), rgba(139, 205, 242, .12));
  color: #0a0f1f;
  font - weight: 800;
  text - decoration: none;
  transition: .2s transform, .2s box - shadow;
  box - shadow: 0 6px 18px rgba(139, 205, 242, .25);
}

    .btn:hover {
  transform: translateY(-2px);
  box - shadow: 0 12px 22px rgba(139, 205, 242, .35)
}

    .btn.ghost {
  background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .03));
  color: #e9f6ff
}

    .micro {
  font - size: 12px;
  opacity: .75
}

    .metrics {
  display: grid;
  grid - template - columns: repeat(4, 1fr);
  gap: 10px;
  margin - top: 18px
}

    .metric {
  background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02));
  border: 1px solid rgba(255, 255, 255, .08);
  border - radius: 16px;
  padding: 12px;
  text - align: center
}

    .metric.val {
  font - size: 22px;
  font - weight: 900;
  color: var(--primary)
}

    .metric.lab {
  font - size: 12px;
  opacity: .8
}

    /* Right hero: device pairing & compass */
    .hero - right {
  display: grid;
  grid - template - rows: 1fr auto;
}

    .pair {
  padding: 20px 20px 16px
}

    .pair h3 {
  margin: 0 0 10px
}

    .pair.status {
  display: flex;
  align - items: center;
  gap: 10px;
  font - weight: 700
}

    .badge {
  padding: 6px 10px;
  border - radius: 999px;
  background: rgba(139, 205, 242, .15);
  border: 1px solid rgba(139, 205, 242, .4);
  color: #bfe7ff
}

    .status.led {
  width: 10px;
  height: 10px;
  border - radius: 50 %;
  background: var(--success);
  box - shadow: 0 0 12px var(--success)
}

    .pair.grid {
  display: grid;
  grid - template - columns: repeat(2, 1fr);
  gap: 12px;
  margin - top: 12px
}

    .tile {
  border: 1px solid rgba(255, 255, 255, .08);
  background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02));
  border - radius: 14px;
  padding: 12px
}

    .tile h4 {
  margin: 0 0 8px;
  font - size: 14px
}

    .compass {
  display: grid;
  place - items: center;
  padding: 18px
}

    .dial {
  width: 160px;
  height: 160px;
  border - radius: 50 %;
  border: 2px solid rgba(255, 255, 255, .15);
  position: relative;
  background: radial - gradient(circle at 50 % 55 %, rgba(139, 205, 242, .25), transparent 50 %), linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02));
  box - shadow: inset 0 0 40px rgba(139, 205, 242, .15);
}

    .needle {
  position: absolute;
  top: 50 %;
  left: 50 %;
  width: 2px;
  height: 70px;
  background: var(--danger);
  transform - origin: center 80 %;
  transform: translate(-50 %, -80 %) rotate(0deg);
  border - radius: 999px;
  box - shadow: 0 0 10px rgba(239, 68, 68, .6)
}

    .tick {
  position: absolute;
  width: 2px;
  height: 10px;
  background: rgba(255, 255, 255, .15);
  top: 6px;
  left: 50 %;
  transform - origin: center 74px
}

    .dial.center {
  position: absolute;
  top: 50 %;
  left: 50 %;
  transform: translate(-50 %, -50 %);
  width: 14px;
  height: 14px;
  border - radius: 50 %;
  background: var(--muted);
  box - shadow: 0 0 12px rgba(211, 211, 211, .6)
}

    /* Main grid */
    .grid {
  max - width: 1200px;
  margin: 12px auto 60px;
  padding: 0 24px;
  display: grid;
  grid - template - columns: 1.25fr .75fr;
  gap: 20px;
  position: relative;
  z - index: 1
}

    .map {
  height: 420px;
  position: relative
}

    .map canvas {
  position: absolute;
  inset: 0;
  width: 100 %;
  height: 100 %;
  border - radius: var(--radius - xl)
}

    .hud {
  display: grid;
  grid - template - columns: repeat(3, 1fr);
  gap: 12px;
  margin - top: 12px;
}

    .control - group {
  display: grid;
  grid - template - columns: 1fr 1fr;
  gap: 12px
}

    .switch {
  display: flex;
  align- items: center;
justify - content: space - between;
padding: 12px;
border: 1px solid rgba(255, 255, 255, .08);
border - radius: 14px;
background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02))
    }

    .switch label {
      opacity: .85;
font - weight: 700
    }

    .toggle {
  --w: 48px;
  --h: 26px;
  width: var(--w);
  height: var(--h);
  border - radius: 999px;
  position: relative;
  background: rgba(255, 255, 255, .15);
  box - shadow: inset 0 6px 16px rgba(0, 0, 0, .25);
  cursor: pointer;
  transition: .25s
}

    .toggle::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border - radius: 50 %;
  background: white;
  box - shadow: var(--shadow);
  transition: .25s
}

    .toggle.active {
  background: linear - gradient(90deg, var(--muted), var(--primary))
}

    .toggle.active::after {
  left: calc(var(--w) - 23px)
}

    .progress {
  height: 12px;
  background: rgba(255, 255, 255, .08);
  border - radius: 999px;
  overflow: hidden
}

    .bar {
  height: 100 %;
  width: 0;
  background: linear - gradient(90deg, var(--primary), var(--accent));
  box - shadow: 0 0 18px rgba(139, 205, 242, .55) inset;
  transition: width 1s ease
}

    .card {
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, .08);
  background: linear - gradient(180deg, rgba(255, 255, 255, .06), rgba(255, 255, 255, .02));
  border - radius: var(--radius - lg)
}

    .list {
  display: grid;
  gap: 10px;
  margin - top: 10px
}

    .row {
  display: flex;
  align - items: center;
  gap: 10px;
  justify - content: space - between;
  padding: 10px 12px;
  border: 1px dashed rgba(255, 255, 255, .12);
  border - radius: 12px
}

    .sos {
  display: flex;
  align - items: center;
  gap: 10px
}

    .sos.pulse {
  width: 14px;
  height: 14px;
  background: var(--danger);
  border - radius: 50 %;
  box - shadow: 0 0 0 0 rgba(239, 68, 68, .7);
  animation: pulse 1.6s infinite
}

    .eq {
  display: flex;
  align - items: end;
  gap: 4px;
  height: 18px
}

    .eq i {
  width: 3px;
  background: var(--primary);
  border - radius: 2px;
  animation: eq 1.2s infinite ease -in -out;
  opacity: .85
}

    .eq i: nth - child(2) {
  animation - delay: .1s
}

    .eq i: nth - child(3) {
  animation - delay: .2s
}

    .eq i: nth - child(4) {
  animation - delay: .3s
}

    .eq i: nth - child(5) {
  animation - delay: .4s
}

@keyframes eq {

  0 %,
    100 % {
      height: 3px
    }

  50 % {
    height: 18px
  }
}

    .footer {
  max - width: 1200px;
  margin: 40px auto 80px;
  opacity: .75;
  text - align: center;
  padding: 0 22px
}

/* Tooltips */
[data - tip] {
  position: relative
}

[data - tip]: hover::after {
  content: attr(data - tip);
  position: absolute;
  bottom: 120 %;
  left: 50 %;
  transform: translateX(-50 %);
  white - space: nowrap;
  background: #0a0f1f;
  color: #dff3ff;
  padding: 6px 10px;
  border - radius: 8px;
  border: 1px solid rgba(255, 255, 255, .12);
  box - shadow: var(--shadow);
  font - size: 12px
}

/* Mobile */
@media(max - width: 980px) {
      .hero {
    grid - template - columns: 1fr;
  }

      .grid {
    grid - template - columns: 1fr
  }

      .metrics {
    grid - template - columns: repeat(2, 1fr)
  }

      .hud {
    grid - template - columns: 1fr 1fr
  }

      .control - group {
    grid - template - columns: 1fr
  }

})