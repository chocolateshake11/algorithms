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

## Git Parancsok Teljes Listája Példákkal

### **Ág (Branch) Kezelés**

#### **git branch** - Ágak megtekintése és kezelése

```bash
# Összes helyi ág listázása
$ git branch
#   develop
# * main
#   feature-login

# Összes ág (helyi + távoli)
$ git branch -a
#   develop
# * main
#   feature-login
#   remotes/origin/develop
#   remotes/origin/main

# Új ág létrehozása
$ git branch feature-sorting
# Branch 'feature-sorting' set up to track remote branch 'feature-sorting' from 'origin'

# Ág törlése (helyi)
$ git branch -d feature-old
# Deleted branch feature-old

# Ág törlése erőszakkal (ha nem merged)
$ git branch -D feature-experimental

# Ág átnevezése
$ git branch -m old-name new-name

# Távoli ág törlése
$ git push origin --delete feature-old
```

---

#### **git checkout** - Ágak közötti váltás

```bash
# Meglévő ágra váltás
$ git checkout develop
# Switched to branch 'develop'

# Új ág létrehozása és arra váltás
$ git checkout -b feature-new
# Switched to a new branch 'feature-new'

# Váltás az előző ágra
$ git checkout -

# Konkrét commitra váltás (detached HEAD)
$ git checkout a1b2c3d4
```

---

#### **git switch** - Ágak közötti váltás (újabb szintaxis)

```bash
# Váltás másik ágra
$ git switch develop

# Új ág létrehozása és váltás
$ git switch -c feature-search

# Előző ágra vissza
$ git switch -
```

---

### **Commit Kezelés**

#### **git log** - Commit történet megtekintése

```bash
# Alapvető commit lista
$ git log
# commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
# Author: John Doe <john@example.com>
# Date:   Mon Mar 2 10:30:00 2026 +0100
#     Új login funkció hozzáadása

# Rövid formátum
$ git log --oneline
# a1b2c3d Új login funkció hozzáadása
# 5d6e7f8 Bug fix a searchben
# 1a2b3c4 Kezdeti commit

# Utolsó 5 commit
$ git log -5

# Szerzővel szűrt
$ git log --author="John"

# Dátum szerinti szűrés
$ git log --since="2 weeks ago"
$ git log --until="2026-02-28"

# Grafikus ábrázolás
$ git log --graph --oneline --all
# * a1b2c3d (HEAD -> main) Új funkció
# * 5d6e7f8 Előző commit
# |\
# | * 2c3d4e5 (develop) Develop ág

# Szöveg szerint keresés
$ git log --grep="login"

# Fájl szerint szűrés
$ git log -- sorting/bubble_sort.py

# Stat megjelenítés
$ git log --stat
```

---

#### **git show** - Commit részletei

```bash
# Konkrét commit megtekintése
$ git show a1b2c3d

# Utolsó commit
$ git show HEAD

# Fájl adott verzióban
$ git show HEAD:sorting/bubble_sort.py

# Előző commit
$ git show HEAD~1
```

---

#### **git diff** - Módosítások összehasonlítása

```bash
# Módosítások a staging area előtt
$ git diff
# diff --git a/algorithm.py b/algorithm.py
# index 1234567..abcdefg 100644
# --- a/algorithm.py
# +++ b/algorithm.py
# @@ -1,5 +1,6 @@
#  def sort():
# -    pass
# +    return []

# Staged módosítások
$ git diff --staged

# Két commit között
$ git diff a1b2c3d 5d6e7f8

# Fájl módosításai
$ git diff sorting/bubble_sort.py

# Szó szerinti diff
$ git diff --word-diff
```

---

#### **git blame** - Kód szerzőjének megtekintése

```bash
# Mely sorokat ki írta
$ git blame sorting/bubble_sort.py
# a1b2c3d (John Doe    2026-02-28 10:30:00 +0100  1) def bubble_sort(arr):
# 5d6e7f8 (Jane Smith  2026-03-01 14:20:00 +0100  2)     for i in range(len(arr)):

# Sorokkal együtt
$ git blame -L 1,10 sorting/bubble_sort.py
```

---

### **Módosítások Visszavonása**

#### **git restore** - Fájlok visszaállítása

```bash
# Módosított fájl visszaállítása (előtte unstage)
$ git restore sorting/bubble_sort.py

# Staged fájl unstage-elése
$ git restore --staged sorting/bubble_sort.py

# Helyi módosítások elhagyása
$ git restore .
```

---

#### **git reset** - Commit-ok visszavonása

```bash
# Utolsó commit visszavonása (fájlok megtartva)
$ git reset --soft HEAD~1
# Fájlok staged maradnak

# Utolsó commit visszavonása (fájlok unstaged)
$ git reset --mixed HEAD~1
# vagy egyszerűen: git reset HEAD~1

# Utolsó commit teljesen elhagyása
$ git reset --hard HEAD~1

# Utolsó 3 commit visszavonása
$ git reset --hard HEAD~3

# Konkrét commitig visszagörgetés
$ git reset --hard a1b2c3d
```

---

#### **git revert** - Commit-ok visszavonása (új commit-tal)

```bash
# Utolsó commit megfordítása
$ git revert HEAD
# Megnyílik az editor az üzenethez

# Nem interaktív módban
$ git revert -n HEAD

# Több commit megfordítása
$ git revert HEAD~2..HEAD
```

---

#### **git clean** - Nem követett fájlok törlése

```bash
# Megjelenítés, mi lennének törölve
$ git clean -n

# Untracked fájlok törlése
$ git clean -f

# Untracked könyvtárak törlése
$ git clean -fd

# Gitignore-ban lévő fájlok is törlése
$ git clean -fdx
```

---

### **Módosítások Szövetségbe Hozása**

#### **git merge** - Ágak összeolvasztása

```bash
# Develop merge a main-ba
$ git checkout main
$ git merge develop
# Merge made by the 'recursive' strategy.

# Merge üzenet nélkül
$ git merge --no-edit develop

# Rebase helyett merge
$ git merge --no-ff develop
```

---

#### **git rebase** - Commit-ok átrendezése

```bash
# Develop átrakása main-re
$ git checkout develop
$ git rebase main

# Interaktív rebase (3 utolsó commit)
$ git rebase -i HEAD~3
# Megnyílik az editor, ahol rendezheted/kombinálhatod a commit-okat

# Merge konfliktus feloldása után
$ git rebase --continue

# Rebase törölése
$ git rebase --abort
```

---

#### **git cherry-pick** - Konkrét commit-ok másolása

```bash
# Egy commit másolása az aktuális ágra
$ git cherry-pick a1b2c3d

# T��bb commit
$ git cherry-pick a1b2c3d 5d6e7f8 2c3d4e5

# Commit tartomány
$ git cherry-pick a1b2c3d..5d6e7f8
```

---

### **Tárolás (Stash)**

#### **git stash** - Munka ideiglenesen mentése

```bash
# Aktuális módosítások mentése
$ git stash
# Saved working directory and index state WIP on main: a1b2c3d Utolsó commit

# Stash listázása
$ git stash list
# stash@{0}: WIP on main: a1b2c3d Utolsó commit
# stash@{1}: WIP on main: 5d6e7f8 Előző commit

# Stash alkalmazása
$ git stash apply

# Konkrét stash alkalmazása
$ git stash apply stash@{1}

# Stash alkalmazása és törlése
$ git stash pop

# Stash törlése
$ git stash drop stash@{0}

# Összes stash törlése
$ git stash clear

# Stash megtekintése
$ git stash show
$ git stash show -p  # részletesebb
```

---

### **Címkék (Tags)**

#### **git tag** - Verziók megjelölése

```bash
# Könnyű tag létrehozása
$ git tag v1.0.0

# Annotated tag (üzenettel)
$ git tag -a v1.0.0 -m "1.0.0 verzió release"

# Összes tag listázása
$ git tag

# Konkrét tag megtekintése
$ git show v1.0.0

# Tag feltöltése
$ git push origin v1.0.0

# Összes tag feltöltése
$ git push origin --tags

# Tag törlése (helyi)
$ git tag -d v1.0.0

# Tag törlése (távoli)
$ git push origin --delete v1.0.0
```

---

### **Távoli Repository Kezelés**

#### **git remote** - Távoli szerverek kezelése

```bash
# Távoli szerverek listázása
$ git remote
# origin
# upstream

# Részletesebb lista
$ git remote -v
# origin    https://github.com/user/repo.git (fetch)
# origin    https://github.com/user/repo.git (push)

# Új távoli szerver hozzáadása
$ git remote add upstream https://github.com/original/repo.git

# Távoli szerver eltávolítása
$ git remote remove upstream

# Távoli szerver átnevezése
$ git remote rename origin github

# Távoli szerver URL módosítása
$ git remote set-url origin https://github.com/newuser/repo.git

# Távoli szerver részletei
$ git remote show origin
```

---

#### **git fetch** - Adatok letöltése (merge nélkül)

```bash
# Összes ág letöltése
$ git fetch

# Konkrét szerver
$ git fetch origin

# Konkrét ág
$ git fetch origin develop

# Összes szerver
$ git fetch --all

# Törölt ágak eltávolítása
$ git fetch --prune
```

---

### **Keresés és Nyomozás**

#### **git grep** - Kód szöveg szerinti keresése

```bash
# String keresése az összes fájlban
$ git grep "sort"
# sorting/bubble_sort.py:def bubble_sort(arr):
# sorting/quick_sort.py:def quick_sort(arr):

# Sorszámokkal
$ git grep -n "sort"

# Csak fájlnév
$ git grep -l "sort"

# Regex keresés
$ git grep "^def.*sort"
```

---

#### **git bisect** - Bug keresése bináris kereséssel

```bash
# Bisect indítása
$ git bisect start

# Jelenlegi verzió jó
$ git bisect good

# Régi verzió rossz
$ git bisect bad HEAD~10

# Tesztelés után: jó vagy rossz
$ git bisect good
$ git bisect bad

# Vége
$ git bisect reset
```

---

### **Konfigurálás**

#### **git config** - Git beállítások

```bash
# Globális felhasználó
$ git config --global user.name "John Doe"
$ git config --global user.email "john@example.com"

# Repository-specifikus
$ git config user.name "John Doe"

# Konfigurálás megtekintése
$ git config --global --list
$ git config --list

# Editor beállítása
$ git config --global core.editor "nano"

# Default branch neve
$ git config --global init.defaultBranch main
```

---

### **Hasznos Kombinációk**

```bash
# Utolsó módosított файлok
$ git diff HEAD~ HEAD

# Módosított fájlok az utolsó commitban
$ git show --name-status

# Mely ágak vannak mergelve
$ git branch --merged

# Mely ágak nincsenek mergelve
$ git branch --no-merged

# Commit statisztika felhasználónként
$ git shortlog -sn

# Napi módosítások száma
$ git log --all --oneline --graph

# Összes fájl a repositoryban
$ git ls-files

# Módosított fájlok listája
$ git diff --name-only HEAD~1 HEAD
```

---

Ezek az alapvető és haladó Git parancsok segítségével képes leszel hatékonyan kezelni a kódodat! 🚀