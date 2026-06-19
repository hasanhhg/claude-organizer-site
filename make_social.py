#!/usr/bin/env python3
"""Generate social-preview.png (1200x630 OG share image), dual Claude + ChatGPT.

Run:  python make_social.py
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
CLAUDE = (217, 119, 86)    # #D97756
CHATGPT = (16, 163, 127)   # #10A37F
SLATE = (26, 29, 33)       # #1A1D21
MUTED = (90, 99, 110)
BG = (255, 255, 255)

F = "C:/Windows/Fonts/segoeui.ttf"
FB = "C:/Windows/Fonts/segoeuib.ttf"
def font(path, size): return ImageFont.truetype(path, size)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# Top dual accent bar: orange | green.
d.rectangle([0, 0, W // 2, 12], fill=CLAUDE)
d.rectangle([W // 2, 0, W, 12], fill=CHATGPT)

# --- Left column ---
x = 84
# App icon (slate folder mark).
icon = Image.open("../claude-chat-organizer/icons/icon-master-1024.png").convert("RGBA").resize((92, 92), Image.LANCZOS)
img.paste(icon, (x, 74), icon)
d.text((x + 110, 92), "Chat Organizer", font=font(FB, 40), fill=SLATE)

# Headline.
d.text((x, 196), "Organize your", font=font(FB, 74), fill=SLATE)
# Colored "Claude & ChatGPT" line.
y2 = 286
segs = [("Claude", CLAUDE), (" & ", SLATE), ("ChatGPT", CHATGPT)]
fh = font(FB, 74)
cx = x
for text, color in segs:
    d.text((cx, y2), text, font=fh, fill=color)
    cx += d.textlength(text, font=fh)

# Subtitle.
d.text((x, 404), "Auto-sort hundreds of chats into projects. One click.",
       font=font(F, 30), fill=MUTED)

# Free pill.
pill = font(FB, 24)
pt = "Free Chrome Extension  .  No API key"
pw = d.textlength(pt, font=pill)
d.rounded_rectangle([x, 470, x + pw + 44, 470 + 50], radius=25, fill=(240, 242, 245))
d.text((x + 22, 482), pt, font=pill, fill=SLATE)

# --- Right column: big icon + platform chips ---
big = Image.open("../claude-chat-organizer/icons/icon-master-1024.png").convert("RGBA").resize((280, 280), Image.LANCZOS)
bx, by = 858, 150
img.paste(big, (bx, by), big)

chip = font(FB, 26)
def chip_draw(cx, cy, dot, label):
    d.ellipse([cx, cy + 8, cx + 18, cy + 26], fill=dot)
    d.text((cx + 30, cy), label, font=chip, fill=SLATE)
chip_draw(bx + 18, 480, CLAUDE, "Claude")
chip_draw(bx + 170, 480, CHATGPT, "ChatGPT")

img.save("social-preview.png")
print("wrote social-preview.png", img.size)
