# 🔧 Configuration MongoDB Atlas pour GD33

## ⚠️ IMPORTANT : Autoriser les IPs de Vercel

Pour que votre boutique fonctionne sur Vercel, vous devez autoriser toutes les IPs dans MongoDB Atlas.

### Étapes à suivre :

1. **Connectez-vous à MongoDB Atlas**
   - Allez sur https://cloud.mongodb.com
   - Connectez-vous avec votre compte

2. **Accédez à votre cluster GD33**
   - Cliquez sur votre cluster `Gd33`

3. **Configurez l'accès réseau**
   - Dans le menu latéral, cliquez sur `Network Access`
   - Cliquez sur `+ ADD IP ADDRESS`
   - Cliquez sur `ALLOW ACCESS FROM ANYWHERE`
   - Ou entrez `0.0.0.0/0` dans le champ IP Address
   - Ajoutez un commentaire : "Vercel Access"
   - Cliquez sur `Confirm`

4. **Vérifiez la connexion**
   - Attendez que le statut devienne `Active`
   - Votre boutique devrait maintenant pouvoir se connecter depuis Vercel

## 📝 Variables d'environnement sur Vercel

Assurez-vous d'avoir configuré ces variables dans Vercel :

```
MONGODB_URI=mongodb+srv://hakimjunior2322:0SvFuvdfcl31bSln@gd33.jm5v1it.mongodb.net/?retryWrites=true&w=majority&appName=Gd33
CLOUDINARY_CLOUD_NAME=dfkc15ak7
CLOUDINARY_API_KEY=484169987741552
CLOUDINARY_API_SECRET=0armYxXXBndCDjExLRr7LduGxXw
NEXTAUTH_SECRET=gd33-secret-key-change-this-in-production
```

## 🚀 Redéployer sur Vercel

Après avoir autorisé les IPs :
1. Allez sur votre dashboard Vercel
2. Cliquez sur votre projet GD33
3. Allez dans l'onglet `Deployments`
4. Cliquez sur les trois points (...) du dernier déploiement
5. Sélectionnez `Redeploy`

Votre boutique devrait maintenant fonctionner correctement !