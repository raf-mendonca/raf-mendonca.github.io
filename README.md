# raf-mendonca.github.io

# Gr1017 Projet final - Rafael Mendonça

### Ancienne version au

#### https://github.com/raf-mendonca/1017examen2rafaelmendonca

### 1017examen2rafaelmendonca

## Besoin fonctionnels

```
Demostration de page avec libellés de traduction du site en langue anglaise et française.
Simulation de affichage de contenue selon status de connexion de l'utisateur.
Exemple de formulaire de contact.
Navigation entre composants de la page à l'en-tête.
La navigation sans post-back.
```

### GitHub création du repository

```

Clone du repository git raf-mendonca.github.io au dossier Rafael-Vue-Final: git clone https://github.com/raf-mendonca/raf-mendonca.github.io.git
Addiction des premières modifications au repository: git add <nom>
Commit: git commit -m "commit initial ex:1"
```

### Setup du projet

```
npm install
```

### Compilation

```
npm run serve
npm run build
```

### Commandes creation du projet

```
npm install -g @vue/cli
vue create examen2rafael
```

### Addiction de route

```
vue add router
```
## Déploiement du site su GitHub Pages

### Justification - Pourquoi utiliser les pages GitHub?

```
GitHubPages est l'un des moyens les plus simples et les plus rapides d'héberger votre site Web, même sans avoir à payer.
```

### Étapes

```
npm run build
creation du module.exports *
éffacer /dist dans le .gitignore
actualization du dist/index.html
```

#### Dans le terminal

```
cd dist
git init
git remote add deploy git@github.com:raf-mendonca/raf-mendonca.github.io.git
git remote update -p
git remote add deploy git@github.com:raf-mendonca/raf-mendonca.github.io.git
$ git add .
git commit -m "Projet final vue"
git remote add origin https://github.com/raf-mendonca/raf-mendonca.github.io.git (dans mon cas)
git push --set-upstream origin master

```
