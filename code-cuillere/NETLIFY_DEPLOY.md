# 🚀 Guide de Déploiement Netlify - Code Cuillère

## 🌟 Version Démo Disponible

L'application Code Cuillère est maintenant prête pour le déploiement sur Netlify ! 

## 📋 Méthodes de Déploiement

### Option 1: Glisser-Déposer (Plus Simple) ⚡

1. **Créer un ZIP du projet**
   ```bash
   # Dans le dossier code-cuillere
   npm run build
   zip -r code-cuillere-netlify.zip . -x "node_modules/*" ".git/*" "*.log"
   ```

2. **Aller sur Netlify**
   - Visitez [netlify.com](https://netlify.com)
   - Créez un compte gratuit si nécessaire
   - Cliquez sur "Deploy to Netlify" ou "Add new site"

3. **Déployer**
   - Sélectionnez "Deploy manually"
   - Glissez-déposez le fichier ZIP
   - Attendez le déploiement (2-3 minutes)

### Option 2: GitHub Integration (Recommandé) 🔗

1. **Pousser sur GitHub**
   ```bash
   # Créer un nouveau repository sur GitHub
   git remote add origin https://github.com/votre-username/code-cuillere.git
   git push -u origin main
   ```

2. **Connecter à Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - Cliquer "New site from Git"
   - Connecter GitHub et sélectionner le repository
   - Configurer le build :
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`

3. **Déploiement automatique**
   - Chaque push sur GitHub = nouveau déploiement
   - Netlify détecte automatiquement Next.js

---

## 🎯 URLs d'Accès après Déploiement

Une fois déployé, votre application sera accessible via :

- **URL principale**: `https://votre-site-name.netlify.app`
- **Page démo fonctionnelle**: `https://votre-site-name.netlify.app/demo`

### Pages Principales

| Page | URL | Description |
|------|-----|-------------|
| **Accueil** | `/` | Page d'accueil complète |
| **Démo Interactive** | `/demo` | Version fonctionnelle sans DB |
| **Énigme #001** | `/riddle/001` | Première énigme |
| **Admin Login** | `/admin/login` | Interface d'administration |

---

## 🚧 Mode Démo vs Version Complète

### Mode Démo (`/demo`)
✅ **Fonctionnel sur Netlify**
- ✅ Interface complète
- ✅ 7 énigmes progressives
- ✅ Système d'indices (simulation)
- ✅ Progression sauvegardée en local
- ✅ Design mystérieux complet

### Version Complète (`/`)
⚠️ **Nécessite une base de données**
- ❌ APIs non fonctionnelles sans DB
- ❌ Inscription réelle
- ❌ Dashboard admin complet
- ❌ Validation paiements

---

## 🔧 Configuration Netlify

### Variables d'Environnement (Optionnel)

Si vous voulez activer certaines fonctionnalités :

1. Aller dans **Site settings** → **Environment variables**
2. Ajouter les variables :

```bash
NODE_VERSION=18
NEXT_PUBLIC_DEMO_MODE=true
```

### Redirections Personnalisées

Le fichier `netlify.toml` est déjà configuré pour :
- Plugin Next.js automatique
- Gestion des routes dynamiques
- Optimisations de performance

---

## 🎮 Tester la Démo

### Énigmes et Réponses

Pour tester rapidement la démo :

| Énigme | Réponse |
|--------|---------|
| #001 | ligne |
| #002 | panneau |
| #003 | lampadaire |
| #004 | poubelle |
| #005 | feu |
| #006 | caniveau |
| #007 | poteau |

### Fonctionnalités Testables

- ✅ **Inscription** : Saisissez n'importe quel nom/téléphone
- ✅ **Progression** : Résolvez les énigmes dans l'ordre
- ✅ **Indices payants** : Cliquez pour "acheter" (simulation)
- ✅ **Interface mobile** : Testez sur smartphone
- ✅ **Design responsive** : Fonctionne sur toutes tailles d'écran

---

## 📱 QR Codes pour la Démo

Pour créer des QR codes pointant vers votre démo Netlify :

### URLs à encoder

```
# Démo principale
https://votre-site.netlify.app/demo

# Énigmes individuelles (si vous activez la base de données)
https://votre-site.netlify.app/riddle/001
https://votre-site.netlify.app/riddle/002
https://votre-site.netlify.app/riddle/003
etc...
```

### Générateurs QR recommandés

- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRStuff](https://www.qrstuff.com/)
- Google "QR code generator"

---

## 🚀 Migration vers Version Complète

Pour passer de la démo à la version complète avec base de données :

### Option 1: Vercel (Recommandé)
- Meilleur support Next.js
- Base de données intégrée
- Fonctions serverless

### Option 2: Railway
- PostgreSQL intégré
- Déploiement simple
- Support Next.js

### Option 3: Netlify + Supabase
- Netlify pour le frontend
- Supabase pour la base de données
- Configuration plus complexe

---

## 🎨 Personnalisation de la Démo

### Changer le Nom de l'Application

Modifiez dans `src/app/demo/page.tsx` :
```tsx
<h1>VOTRE NOM ICI</h1>
```

### Modifier les Énigmes

Éditez `src/lib/mockData.ts` :
```tsx
export const mockRiddles = [
  {
    // Vos énigmes personnalisées
  }
]
```

### Changer les Couleurs

Modifiez les classes Tailwind dans les composants :
- `from-purple-400 to-pink-400` → Vos couleurs
- `bg-slate-900` → Votre arrière-plan

---

## 📊 Analytics et Monitoring

### Netlify Analytics
- Activez dans Site settings → Analytics
- Suivi des visites et performances

### Google Analytics
Ajoutez dans `src/app/layout.tsx` :
```tsx
// Code Google Analytics
```

---

## 🐛 Résolution de Problèmes

### Build Fails
```bash
# Nettoyer et reconstruire
rm -rf .next node_modules
npm install
npm run build
```

### Page Non Trouvée
- Vérifiez le fichier `netlify.toml`
- Assurez-vous que les redirections sont configurées

### Lenteur de Chargement
- Images optimisées automatiquement
- Code splitting par Next.js
- CDN Netlify global

---

## 🎯 Checklist de Déploiement

### Avant Déploiement
- [ ] ✅ Test local : `npm run build`
- [ ] ✅ Commit Git : `git add . && git commit -m "Deploy"`
- [ ] ✅ Vérification des fichiers : `netlify.toml`, `next.config.js`

### Après Déploiement
- [ ] 📱 Test sur mobile
- [ ] 🖥️ Test sur desktop
- [ ] 🔗 Partage du lien démo
- [ ] 📊 Configuration analytics
- [ ] 🎯 Création QR codes

---

## 🌟 Exemple de Déploiement Réussi

Une fois déployé, vous aurez :

**🔗 URL Démo**: https://code-cuillere-demo.netlify.app/demo

**Fonctionnalités Actives** :
- ✅ Interface complète Code Cuillère
- ✅ 7 énigmes progressives fonctionnelles
- ✅ Système d'achat d'indices (simulation)
- ✅ Design mystérieux et animations
- ✅ Compatible mobile et desktop

---

## 🚀 Prêt à Déployer !

Votre application Code Cuillère est maintenant optimisée pour Netlify. 

**Prochaines étapes** :
1. 🌐 Déployer sur Netlify
2. 📱 Tester la démo en ligne
3. 🔗 Partager le lien
4. 📈 Analyser le trafic
5. 🎯 Planifier la migration complète

**Que l'aventure numérique commence ! 🎮**

---

*Besoin d'aide ? La documentation complète est dans README.md*