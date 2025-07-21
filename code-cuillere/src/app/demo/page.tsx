'use client'

import { useState } from 'react'
import { mockRiddles } from '@/lib/mockData'

export default function DemoPage() {
  const [currentRiddle, setCurrentRiddle] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [userName, setUserName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [unlockedHints, setUnlockedHints] = useState<string[]>([])

  const riddle = mockRiddles[currentRiddle]

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    if (userName && whatsapp) {
      setIsRegistered(true)
      setMessage(`Bienvenue ${userName} ! Vous pouvez maintenant jouer.`)
    }
  }

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault()
    const normalizedAnswer = userAnswer.toLowerCase().trim()
    const normalizedCorrect = riddle.correctAnswer.toLowerCase().trim()

    if (normalizedAnswer === normalizedCorrect) {
      setMessage('🎉 Bravo ! Réponse correcte !')
      if (currentRiddle < mockRiddles.length - 1) {
        setTimeout(() => {
          setCurrentRiddle(currentRiddle + 1)
          setUserAnswer('')
          setMessage('')
          setUnlockedHints([])
        }, 2000)
      } else {
        setMessage('🏆 Félicitations ! Vous avez terminé toutes les énigmes ! Vous êtes maintenant finaliste pour le tirage au sort de 100 000 F CFA !')
      }
    } else {
      setMessage('❌ Réponse incorrecte. Essayez encore !')
      setUserAnswer('')
    }
  }

  const buyHint = (hintType: 'bonus' | 'mega' | 'answer') => {
    const hints = {
      bonus: riddle.bonusHint,
      mega: riddle.megaHint,
      answer: `Réponse: ${riddle.correctAnswer}`
    }
    
    const prices = {
      bonus: '100 F CFA',
      mega: '200 F CFA', 
      answer: '500 F CFA'
    }

    const hint = hints[hintType]
    const price = prices[hintType]

    if (!unlockedHints.includes(hint)) {
      setUnlockedHints([...unlockedHints, hint])
      alert(`💰 Indice débloqué pour ${price} !\n\n"${hint}"\n\n(En version complète, le paiement se ferait via Orange Money/Wave)`)
    } else {
      alert('Vous avez déjà cet indice !')
    }
  }

  if (!isRegistered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-800/20 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-800/20 to-transparent rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CODE CUILLÈRE
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-light mb-4">
              Mystère • Énigme • Récompense
            </p>
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-yellow-200 text-lg">
                🚧 <strong>Version Démo</strong> - Ceci est une démonstration de l'application Code Cuillère sur Netlify
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-black/30 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-purple-300">
                📝 Inscription Démo
              </h2>
              
              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Numéro WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="Ex: +223 XX XX XX XX"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-3 rounded-lg font-bold transition-all duration-300"
                >
                  🎯 Commencer la Démo
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-400 text-sm">
            <p>🔐 Version démo • 📞 Support: 00223 70446750</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-800/20 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-800/20 to-transparent rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {riddle.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-300">
            Bonjour {userName} • Énigme {currentRiddle + 1}/7
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentRiddle + 1) / 7) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">
            Progression: {currentRiddle + 1}/7 énigmes
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">🧩 Énigme</h2>
              <p className="text-lg text-gray-200 leading-relaxed bg-gray-800/50 p-6 rounded-lg">
                {riddle.text}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-green-400">💡 Indices gratuits</h3>
              <div className="space-y-3">
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-200">🔸 {riddle.freeHint1}</p>
                </div>
                <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30">
                  <p className="text-green-200">🔸 {riddle.freeHint2}</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-yellow-400">💰 Acheter des indices</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => buyHint('bonus')}
                  className="bg-yellow-900/30 hover:bg-yellow-900/50 p-4 rounded-lg border border-yellow-500/30 transition-colors"
                >
                  <div className="text-yellow-300 font-bold">Indice bonus</div>
                  <div className="text-yellow-200 text-sm">100 F CFA</div>
                </button>
                <button
                  onClick={() => buyHint('mega')}
                  className="bg-orange-900/30 hover:bg-orange-900/50 p-4 rounded-lg border border-orange-500/30 transition-colors"
                >
                  <div className="text-orange-300 font-bold">Méga indice</div>
                  <div className="text-orange-200 text-sm">200 F CFA</div>
                </button>
                <button
                  onClick={() => buyHint('answer')}
                  className="bg-red-900/30 hover:bg-red-900/50 p-4 rounded-lg border border-red-500/30 transition-colors"
                >
                  <div className="text-red-300 font-bold">Bonne réponse</div>
                  <div className="text-red-200 text-sm">500 F CFA</div>
                </button>
              </div>
            </div>

            {unlockedHints.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-blue-400">🔓 Indices débloqués</h3>
                <div className="space-y-3">
                  {unlockedHints.map((hint, index) => (
                    <div key={index} className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                      <p className="text-blue-200">✨ {hint}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmitAnswer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  🎯 Ta réponse
                </label>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="Écris ta réponse ici..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={!userAnswer.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-3 rounded-lg font-bold transition-all duration-300 disabled:opacity-50"
              >
                🚀 Valider la réponse
              </button>
            </form>

            {message && (
              <div className={`mt-4 p-4 rounded-lg text-center ${
                message.includes('Bravo') || message.includes('Félicitations') ? 'bg-green-900/30 border border-green-500/30 text-green-200' :
                message.includes('incorrect') ? 'bg-red-900/30 border border-red-500/30 text-red-200' :
                'bg-blue-900/30 border border-blue-500/30 text-blue-200'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>🔐 Code Cuillère • 💰 00223 70446750 • 🚧 Version Démo Netlify</p>
        </div>
      </div>
    </div>
  )
}