async function loadFont(e, t, o) {
    const n = t["woff2" in document.createElement("link").relList ? "woff2" : "woff"],
        a = new FontFace(e, `url(${n})`, o);
    try {
        const e = await a.load();
        document.fonts.add(e);
    } catch (e) {}
}
async function preloadFonts() {
    await Promise.all([
        loadFont("OpenSans", { woff: "./fonts/OpenSans-Light.woff", woff2: "./fonts/OpenSans-Light.woff2" }, { style: "normal", weight: "400" }),
        loadFont("Lora-Regular", { woff: "./fonts/Lora-Regular.woff", woff2: "./fonts/Lora-Regular.woff2" }, { style: "normal", weight: "400" }),
    ]);
}
function initNewTabLinks() {
    document.querySelectorAll("a.new_tab").forEach((e) => {
        e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer");
    });
}
function initModal() {
    const e = () => {
        (document.body.style.overflow = ""), (document.body.style.paddingRight = "");
    };
    document.querySelectorAll(".element[data-modal-id]").forEach((e) => {
        e.addEventListener("click", function () {
            const e = this.getAttribute("data-modal-id"),
                t = document.getElementById(e);
            t &&
                (t.classList.add("open"),
                (() => {
                    const e = window.innerWidth - document.documentElement.clientWidth;
                    (document.body.style.overflow = "hidden"), (document.body.style.paddingRight = `${e}px`);
                })());
        });
    }),
        document.addEventListener("keydown", function (t) {
            if ("Escape" === t.key) {
                const t = document.querySelector(".modal.open");
                t && (t.classList.remove("open"), e()), n();
            }
        });
    const t = document.querySelectorAll('a.anchor[href^="#"]'),
        o = document.querySelectorAll(".hashtags.content__wrapper"),
        n = () => {
            o.forEach((e) => e.classList.remove("open__hashtags")), t.forEach((e) => (e.style.opacity = ""));
        };
    t.forEach((e) => {
        e.addEventListener("click", (t) => {
            t.preventDefault();
            const o = e.getAttribute("href").substring(1),
                a = document.getElementById(o);
            if (!a || !a.classList.contains("hashtags")) return;
            const c = a.classList.contains("open__hashtags");
            n(), c || (a.classList.add("open__hashtags"), (e.style.opacity = "1"));
        });
    });
    let a = 0,
        c = 0,
        i = !1;
    document.addEventListener("touchstart", (e) => {
        const t = e.target.closest(".modal.open");
        t && ((a = e.touches[0].clientX), (i = !0), (t.dataset.isSwiping = "true"));
    }),
        document.addEventListener("touchmove", (t) => {
            const o = document.querySelector('.modal.open[data-is-swiping="true"]');
            o && i && ((c = t.touches[0].clientX), a - c > 150 && (o.classList.remove("open"), e(), n(), (i = !1), delete o.dataset.isSwiping));
        }),
        document.addEventListener("touchend", () => {
            const e = document.querySelector('.modal.open[data-is-swiping="true"]');
            e && ((i = !1), delete e.dataset.isSwiping);
        });
}
function initCopy() {
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("a.copy").forEach(function (e) {
            e.addEventListener("click", function (t) {
                t.preventDefault();
                const o = e.getAttribute("href");
                if (o) {
                    const e = document.createElement("input");
                    (e.value = o), document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e);
                }
            });
        });
    });
}
function initVkRedirect() {
    document.querySelectorAll(".vk_music").forEach((e) => {
        const t = e.getAttribute("href");
        e.addEventListener("click", function (e) {
            !(function (e, t) {
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                    const e = `vk://vk.com/${t.replace("https://vk.com/", "")}`;
                    window.location.href = e;
                } else window.open(t, "_blank");
                e.preventDefault();
            })(e, t);
        });
    });
}
function initCopyLong() {
    document.querySelectorAll(".copylong[data-href]").forEach((e) => {
        e.addEventListener("click", function (e) {
            e.preventDefault();
            const t = this.getAttribute("data-href");
            if (t) {
                const e = {
                    "cmd-cd": 'cd /d "C:\\on-your-face\\"',
                    "cmd-start": 'start "" "c:\\OSPanel\\Open Server Panel.exe"',
                    "cmd-OSP-server-START": 'start "" "c:\\OSPanel\\Open Server Panel.exe" /start',
                    "cmd-OSP-server-RESTART": 'start "" "c:\\OSPanel\\Open Server Panel.exe" /restart',
                    "cmd-OSP-server-STOP": 'start "" "c:\\OSPanel\\Open Server Panel.exe" /stop',
                    "cmd-OSP-domain": "http://test-wordpress/wp-admin/",
                    "git-clone": "git clone",
                    "git-delete (cmd)": "rmdir /s /q .git",
                    "git-push (3in1)": "git add . && git commit -m ok && git push",
                    "stop zapret": "sc stop WinDivert",
                    "regedit-autorun": "HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
                    "close process (OSP promt)": 'taskkill /IM "Open Server Panel.exe" /F',
                    termux_iam_true: "git config --global --add safe.directory /storage/emulated/0/bookmarks",
                    "cd ~/storage/shared/bookmarks": "cd ~/storage/shared/bookmarks",
                    "termux_git-pull": "git pull origin main",
                    "block-ghost": '<div class="element ghost"></div>',
                    vk_name_promt_gpt:
                        "В этом диалоге запомни задачу: сделай строку в нижнем регистре, замени все пробелы на одинарные подчёркивания, убери запятые. Название трека — справа, исполнители — слева, всё объединено в одну строку через подчёркивания. Сейчас ничего не делай, далее я буду скидывать тебе текст, с ним и будешь работать.",
                    "directory-buttery-taskbar": "C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Cryptic Butter",
                }[t];
                if (e) {
                    const t = document.createElement("textarea");
                    (t.style.position = "fixed"),
                        (t.style.opacity = "0"),
                        (t.value = e),
                        document.body.appendChild(t),
                        t.focus(),
                        t.select(),
                        document.execCommand("copy"),
                        document.body.removeChild(t);
                }
            }
        });
    });
}
initNewTabLinks(), initModal(), initCopy(), initCopyLong(), initVkRedirect(), preloadFonts();
