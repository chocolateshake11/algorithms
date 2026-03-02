# algorithms
I'll provide a comprehensive guide on basic Git commands in Hungarian.

## Git Alapvető Parancsok és Azok Használata

### 1. **git init** - Új Git Repository Létrehozása

A `git init` parancs inicializál egy új Git repositoryt az aktuális könyvtárban.

**Használat:**
```bash
git init
```

**Példa:**
```bash
$ mkdir my-project
$ cd my-project
$ git init
# Initialized empty Git repository in /path/to/my-project/.git/
```

Ez létrehozza a `.git` könyvtárat, amely a Git metaadatokat és objektumokat tárja.

---

### 2. **git clone** - Repository Klónozása

A `git clone` parancs egy meglévő repositoryt másolja le a helyi gépre.

**Használat:**
```bash
git clone <repository-url>
```

**Példa:**
```bash
$ git clone https://github.com/user/project.git
# Cloning into 'project'...
# remote: Enumerating objects: 42, done.
# Unpacking objects: 100% (42/42), done.
```

Ez a parancs letölt minden fájlt, commitot és ágat a távoli repositoryból.

---

### 3. **git status** - Munkaterület Állapotának Megtekintése

A `git status` parancs megjeleníti a munkaterület jelenlegi állapotát: mely fájlok változtak, mely fájlok vannak hozzáadva (staged), stb.

**Használat:**
```bash
git status
```

**Példa:**
```bash
$ git status
# On branch main
# Changes not staged for commit:
#   modified:   file1.txt
# 
# Untracked files:
#   new-file.js
```

Az output mutatja:
- **Modified**: megváltoztatott fájlok
- **Untracked**: új, még nem hozzáadott fájlok
- **Staged**: a commit-ra váró fájlok

---

### 4. **git add** - Fájlok Hozzáadása az Index-hez

A `git add` parancs hozzáadja a módosított vagy új fájlokat a staging area-hoz (index), így azok beépülhetnek a következő commitba.

**Használat:**
```bash
# Egyetlen fájl hozzáadása
git add <file>

# Összes fájl hozzáadása
git add .

# Egy könyvtár összes fájljának hozzáadása
git add <directory>
```

**Példák:**
```bash
# Egyetlen fájl
$ git add file1.txt

# Összes módosított fájl
$ git add .

# Könyvtárban lévő összes fájl
$ git add src/
```

---

### 5. **git commit** - Módosítások Véglegesítése

A `git commit` parancs a staging area-ban lévő módosításokat beépíti a repositoryba egy verziókezelési pontként.

**Használat:**
```bash
git commit -m "Commit üzenet"
```

**Példák:**
```bash
$ git commit -m "Új login funkció hozzáadása"
# [main a1b2c3d] Új login funkció hozzáadása
#  1 file changed, 25 insertions(+)

# Több fájl összefoglalásával
$ git commit -m "Bug fix és dokumentáció frissítés"

# Összes módosított fájl hozzáadása és commit egy parancsban
$ git commit -am "Gyors módosítás"
```

**Jó gyakorlat:** Írjon értelmes, leíró commit üzenetet, amely magyarázza a módosítás célját.

---

### 6. **git push** - Módosítások Feltöltése a Távoli Repositoryba

A `git push` parancs a helyi commitokat feltölti a távoli repositoryba (pl. GitHub).

**Használat:**
```bash
# Az aktuális ág feltöltése
git push

# Meghatározott ág feltöltése
git push <remote> <branch>
```

**Példák:**
```bash
# Alapértelmezett (origin/main)
$ git push
# Counting objects: 3, done.
# Writing objects: 100% (3/3), 245 bytes | 245 bytes/s, done.
# To https://github.com/user/project.git
#    1a2b3c4..5d6e7f8  main -> main

# Meghatározott ág
$ git push origin develop

# Új ág feltöltése
$ git push -u origin feature-branch
# -u = upstream; ezután elegendő a "git push"
```

---

### 7. **git pull** - Módosítások Letöltése a Távoli Repositoryból

A `git pull` parancs frissíti a helyi repositoryt a távoli verzióval. Ez egy kombinációja a `git fetch` és `git merge` parancsoknak.

**Használat:**
```bash
# Az aktuális ágat frissíti
git pull

# Meghatározott ág letöltése
git pull <remote> <branch>
```

**Példák:**
```bash
# Alapértelmezett frissítés
$ git pull
# remote: Enumerating objects: 5, done.
# Unpacking objects: 100% (5/5), done.
# Fast-forward
#  file2.txt | 3 +++
#  1 file changed, 3 insertions(+)

# Konkrét ágat húz
$ git pull origin main
```

---

## Teljes Munkafolyamat Példa

Íme egy valós szénusz, amely az összes parancsot mutatja:

```bash
# 1. Repository klónozása
$ git clone https://github.com/user/my-project.git
$ cd my-project

# 2. Új fájl létrehozása
$ echo "console.log('Hello');" > script.js

# 3. Állapot ellenőrzése
$ git status
# Untracked files: script.js

# 4. Fájl hozzáadása
$ git add script.js

# 5. Commit
$ git commit -m "Hello script hozzáadása"
# [main a1b2c3d] Hello script hozzáadása
#  1 file changed, 1 insertion(+)

# 6. Módosítások feltöltése
$ git push
# To https://github.com/user/my-project.git
#    1a2b3c4..5d6e7f8  main -> main

# 7. Későbbi frissítéskor
$ git pull
# Already up to date.
```

---

## Hasznos Tippek

| Parancs | Leírás |
|---------|--------|
| `git log` | Commit történet megtekintése |
| `git diff` | Módosítások megtekintése commitálás előtt |
| `git branch` | Ágak megtekintése és kezelése |
| `git checkout` | Ágak közötti váltás |
| `git reset` | Módosítások visszavonása |
| `git stash` | Munkaterület mentése ideiglenesen |

Ez az alapvetõ Git ismereteid alapja lesz a verziókezeléshez!