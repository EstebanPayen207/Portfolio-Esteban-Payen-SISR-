/**
 * ============================================================================
 * FICHIER DE DONNÉES MODULAIRE — PORTFOLIO ESTEBAN PAYEN (BTS SIO SISR)
 * ============================================================================
 * Synchronisé avec le dossier officiel E5 / E4, les comptes-rendus de TP/Projets
 * du Lycée Robert Schuman (Metz) et les activités du stage Buro24 / FCC Informatique.
 *
 * Catégories de filtrage disponibles :
 * - "systeme"   : Systèmes, Virtualisation, Active Directory, Serveurs & Parc
 * - "reseau"    : Commutation, VLAN, Routage Inter-VLAN, Haute dispo réseau
 * - "stage"     : Réalisations en milieu professionnel (Stage BTS SIO 1re année)
 * ============================================================================
 */

const PROJECTS_DATA = [
  /* ==========================================================================
     RÉALISATIONS EN COURS DE FORMATION (LYCÉE ROBERT SCHUMAN — METZ)
     ========================================================================== */
  {
    id: "proj-21-infra",
    title: "Projet 21 — Installation et configuration d'une infrastructure complète",
    category: "reseau",
    categoryLabel: "Infrastructure & Réseau",
    context: "Atelier Professionnel SISR • 18/10/2026",
    description:
      "Conception et déploiement en équipe d'une infrastructure réseau et système complète : serveurs Windows Server 2016 (AD DS, DNS) et clients Windows 10 sous Hyper-V, commutation Cisco SG300-10 & HP 2620-24, VLANs, routage inter-VLAN, STP, LACP, HSRP, RIP, WLAN (Wi-Fi) et listes de contrôle d'accès (ACL).",
    tags: [
      "Cisco SG300-10",
      "HP 2620-24",
      "VLAN / Trunk 802.1Q",
      "STP & LACP",
      "HSRP & RIP",
      "ACL & WLAN",
      "Windows Server 2016"
    ],
    docUrl: "assets/docs/projets/Projet21_Infrastructure_Reseau.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Déployer une topologie multi-commutateurs (S31, S32, S33, S34) et routeurs avec plan d'adressage SVI en 10.99.x.x/24.",
        "Mettre en œuvre la redondance de niveau 2 (Spanning Tree Protocol & agrégation de liens LACP) et de niveau 3 (protocole HSRP et routage dynamique RIP).",
        "Intégrer les machines virtuelles Windows Server 2016 (AD/DNS) et Windows 10 au domaine, configurer le Wi-Fi (WLAN) et filtrer les flux par ACL.",
        "Sauvegarder les configurations des commutateurs S32 et S34 via TFTP et documenter le cahier des charges."
      ],
      architecture:
        "Salle labo 6232 (Lycée Robert Schuman) — Équipe projet (Esteban Payen en charge des switchs S32 Cisco SG300-10 et S34 HP 2620-24, des routeurs R1/R2 et de la VM d'administration SIO_EP_WIN_Administration_Switch en 10.99.3.181/24).",
      commandSnippet: `! Extrait configuration SVI Administration & Trunk (Switch S32 / S34)\nhostname S34HP2620-24\nno telnet-server\nvlan 99\n name "Administration"\n untagged 1\n tagged 7-9\n ip address 10.99.3.244 255.255.255.0\nexit`,
      competencesE4: [
        "Gérer le patrimoine informatique (Recensement, normes, sauvegardes TFTP)",
        "Répondre aux incidents et aux demandes d'assistance et d'évolution",
        "Travailler en mode projet (Répartition des rôles S31-S34, suivi chronologique)",
        "Mettre à disposition des utilisateurs un service informatique"
      ]
    }
  },
  {
    id: "proj-4-win2016",
    title: "Projet 4 — Installation et administration de Windows Server 2016 (AD DS, DNS, DHCP)",
    category: "systeme",
    categoryLabel: "Système & Active Directory",
    context: "TP Système SISR • 04/12/2025",
    description:
      "Déploiement d'un contrôleur de domaine Windows Server 2016 sous Hyper-V (domaine Ecole.eni), promotion AD DS, configuration DNS, création automatisée des utilisateurs/groupes par script PowerShell et gestion fine des permissions de partage réseau (Partage Lyon, désactivation de l'héritage).",
    tags: [
      "Windows Server 2016",
      "Active Directory (AD DS)",
      "PowerShell",
      "DNS & DHCP",
      "Permissions NTFS / Partages",
      "Hyper-V"
    ],
    docUrl: "assets/docs/projets/Projet4_Windows_Server_2016.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Créer et configurer la machine virtuelle serveur EP_W2016_Base (IP 10.10.10.12/24) sous Hyper-V.",
        "Installer le rôle Active Directory Domain Services (AD DS), promouvoir le serveur en contrôleur de domaine (Ecole.eni) et activer le service DNS.",
        "Joindre un poste client Windows 10 au domaine et exécuter un script PowerShell pour provisionner l'arborescence (sites, utilisateurs, unités d'organisation).",
        "Structurer les groupes globaux et de domaine locaux (ex: Groupe ASR Formateur, élèves, classe) et sécuriser le dossier partagé « Partage Lyon » (rupture d'héritage NTFS et droits par groupes)."
      ],
      architecture:
        "Hyperviseur Hyper-V en salle 2232 (Poste P34 Core i5-9500, 16 Go RAM) hébergeant le contrôleur de domaine Windows Server 2016 et une VM cliente Windows 10 intégrée au domaine.",
      commandSnippet: `# Rôles déployés sur EP_W2016_Base (10.10.10.12/24)\nInstall-WindowsFeature -Name AD-Domain-Services, DNS, DHCP -IncludeManagementTools\n# Jonction au domaine Ecole.eni & application de la stratégie AGDLP sur le Partage Lyon`,
      competencesE4: [
        "Gérer le patrimoine informatique (Gestion des habilitations AD et partages)",
        "Travailler en mode projet",
        "Mettre à disposition des utilisateurs un service informatique"
      ]
    }
  },
  {
    id: "proj-7-ocs-glpi",
    title: "Projet 7 — Inventaire automatisé et gestion de parc avec OCS Inventory & GLPI",
    category: "systeme",
    categoryLabel: "Système & Gestion de Parc",
    context: "TP Gestion de Parc • 01/04/2026",
    description:
      "Étude comparative (Coût Total de Possession) et déploiement d'une solution open-source d'inventaire et de gestion de parc : serveur OCS Inventory NG sous Windows Server 2016 (XAMPP / Apache / MySQL), déploiement d'agents sur postes Windows 10 et couplage avec GLPI.",
    tags: [
      "OCS Inventory NG",
      "GLPI",
      "Windows Server 2016",
      "XAMPP / MySQL",
      "Agent Deployment",
      "IP Discovery"
    ],
    docUrl: "assets/docs/projets/Projet7_OCS_GLPI.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Répondre au cahier des charges de gestion de parc : référencer le matériel/logiciel, suivre les licences, classer par service et gérer les contrats via une interface web.",
        "Installer et sécuriser OCS Inventory NG Server sur la VM NPW2016SERVEUROCS (192.168.168.1/24) avec durcissement des accès MySQL root et .htaccess.",
        "Déployer l'agent OCSNG-Windows-Agent-2.1.1.3 sur le client Windows 10 (192.168.168.2/24) ainsi que sur le serveur lui-même avec remontée immédiate (/NOW).",
        "Vérifier la remontée complète de l'inventaire (CPU, RAM, disques, logiciels, cartes réseau, écrans) dans la base MySQL ocsweb."
      ],
      architecture:
        "Commutateur virtuel interne Hyper-V « TPOCSGLPI » reliant le serveur Windows Server 2016 (NPW2016SERVEUROCS - 192.168.168.1/24) et le client Windows 10 (NPW10CLIENTOCS - 192.168.168.2/24).",
      commandSnippet: `# Configuration de l'agent OCS Inventory sur le poste client Windows 10\nServer URL : http://192.168.168.1/ocsinventory\nOptions    : [x] Enable verbose log\n             [x] Immediately launch inventory (=/NOW)\n# Paramètres serveur : LOGLEVEL = ON | PROLOG_FREQ = 1 heure`,
      competencesE4: [
        "Gérer le patrimoine informatique (Recenser et identifier les ressources numériques)",
        "Répondre aux incidents et aux demandes d'assistance et d'évolution",
        "Mettre à disposition des utilisateurs un service informatique"
      ]
    }
  },
  {
    id: "proj-6-routage-intervlan",
    title: "Projet 6 — Mise en œuvre du Routage Inter-VLAN (Router-on-a-Stick / 802.1Q)",
    category: "reseau",
    categoryLabel: "Réseau & Routage Cisco",
    context: "TP Réseau SISR • 30/03/2026",
    description:
      "Configuration du routage inter-VLAN sur routeur Cisco 1760 (R31CISCO1760) via sous-interfaces logiques dot1Q et liens Trunk sur commutateurs pour interconnecter les VLANs 10 (IT), 20 (SISR), 30 (SLAM), 40 (CYBER) et 50 (COMNUM).",
    tags: [
      "Routeur Cisco 1760",
      "Routage Inter-VLAN",
      "Encapsulation dot1Q",
      "Sous-interfaces",
      "Switchport Trunk",
      "Diagnostic Pare-feu"
    ],
    docUrl: "assets/docs/projets/Projet6_Routage_InterVLAN.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Sécuriser l'accès au routeur Cisco R31CISCO1760 (hostname, compte admin, chiffrement service password-encryption, IP d'administration 10.99.3.254/24).",
        "Créer les sous-interfaces FastEthernet0/0.10 à .50 avec encapsulation IEEE 802.1Q et passerelles par défaut respectives (10.10.3.254 à 10.50.3.254).",
        "Configurer le port d'interconnexion du commutateur en mode Trunk en limitant les VLANs autorisés (allowed vlan 10,20,30,40,50).",
        "Diagnostiquer et résoudre un incident de blocage ICMP lié au pare-feu Windows sur les machines virtuelles clientes."
      ],
      architecture:
        "Architecture Router-on-a-Stick en salle 6232 : Routeur Cisco 1760 (R1/R2) relié en Trunk 802.1Q aux commutateurs distribuant les 5 VLANs métiers.",
      commandSnippet: `interface FastEthernet0/0\n no shutdown\ninterface FastEthernet0/0.10\n encapsulation dot1Q 10\n ip address 10.10.3.254 255.255.255.0\ninterface FastEthernet0/0.20\n encapsulation dot1Q 20\n ip address 10.20.3.254 255.255.255.0\n!\nSwitch(config-if)# switchport mode trunk\nSwitch(config-if)# switchport trunk allowed vlan 10,20,30,40,50`,
      competencesE4: [
        "Gérer le patrimoine informatique",
        "Mettre à disposition des utilisateurs un service informatique (Tests d'intégration inter-VLAN)"
      ]
    }
  },
  {
    id: "proj-5-vlan-trunk",
    title: "Projet 5 — Segmentation VLAN & Interconnexion 802.1Q inter-commutateurs",
    category: "reseau",
    categoryLabel: "Réseau & Commutation L2",
    context: "TP Réseau SISR • 19/03/2026",
    description:
      "Segmentation logique d'un réseau local en 6 VLANs (IT, SISR, SLAM, CYBER, COMNUM, Administration), étude comportementale des trames Tagged/Untagged (802.1Q / 802.1p), mise en place des liens Trunk entre les switchs S32 et S34 et sauvegarde TFTP.",
    tags: [
      "VLANs (10 à 50, 99)",
      "IEEE 802.1Q / 802.1p",
      "Tagged / Untagged",
      "HP 2620-24 & Cisco",
      "TFTP64 Backup"
    ],
    docUrl: "assets/docs/projets/Projet5_VLAN_Inter-commutateur.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Créer les VLANs 10 (IT), 20 (SISR), 30 (SLAM), 40 (CYBER), 50 (COMNUM) et 99 (Administration) et affecter les ports d'accès correspondants.",
        "Configurer les ports 7, 8 et 9 en mode Trunk 802.1Q (tagged) pour propager les VLANs entre les commutateurs S32 et S34 sans créer de boucle.",
        "Réaliser une matrice de tests complète sur le comportement des trames étiquetées et non étiquetées (succès, rejet/drop ou bascule en VLAN natif).",
        "Identifier et résoudre un incident de correspondance de vSwitch Hyper-V (bascule de SIO1 vers SISR) et sauvegarder les configurations sur serveur TFTP64."
      ],
      architecture:
        "Interconnexion 802.1Q entre le switch Cisco S32 et le switch HP 2620-24 S34 (IP SVI Admin 10.99.3.244/24) avec 5 machines virtuelles clientes réparties par VLAN.",
      commandSnippet: `vlan 10\n name "IT"\n untagged 2\n tagged 7-9\nexit\nvlan 20\n name "SISR"\n untagged 3\n tagged 7-9\nexit\nvlan 99\n name "Administration"\n untagged 1\n tagged 7-9\n ip address 10.99.3.244 255.255.255.0`,
      competencesE4: [
        "Gérer le patrimoine informatique (Sauvegarde TFTP et segmentation)",
        "Mettre à disposition des utilisateurs un service informatique"
      ]
    }
  },
  {
    id: "proj-3-commutation-cisco-hp",
    title: "Projet 3 — Concepts et configuration de base de la commutation (Cisco SG300-10 & HP 2620-24)",
    category: "reseau",
    categoryLabel: "Commutation & Sécurité L2",
    context: "TP Réseau SISR • 09/03/2026",
    description:
      "Prise en main matérielle par liaison série RS232 (PuTTY), initialisation niveau 2, configuration des interfaces virtuelles SVI, gestion de la table d'adresses MAC, durcissement SSH, sécurisation des ports et sauvegarde sur serveur TFTP.",
    tags: [
      "Cisco SG300-10",
      "HP ProCurve 2620-24",
      "Console RS232 / PuTTY",
      "Interface SVI",
      "SSH & Sécurité L2",
      "TFTPD"
    ],
    docUrl: "assets/docs/projets/Projet3_Cisco_SG300-10.docx",
    secondDocUrl: "assets/docs/projets/Projet3_HP_2620-24.docx",
    docLabel: "Doc Cisco (.docx)",
    secondDocLabel: "Doc HP (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Établir une connexion hors-bande via câble console RS232 et PuTTY depuis la VM d'administration (10.99.3.181/24).",
        "Analyser la configuration en cours (show running-config), la NVRAM, la mémoire Flash, la version d'OS et la table MAC.",
        "Configurer une Switch Virtual Interface (SVI) pour l'administration IP distante, activer SSH en remplacement de Telnet et appliquer les fonctions de sécurité sur les ports.",
        "Exporter et sauvegarder les fichiers de configuration des commutateurs sur un serveur TFTP."
      ],
      architecture:
        "Deux livrables complémentaires réalisés en salle 6232 : configuration du commutateur Cisco SG300-10 (S32) et du commutateur HP 2620-24 (S34).",
      commandSnippet: `show running-config\nshow ip interface vlan 1\nshow version\nshow vlan\n! Désactivation de Telnet, chiffrement des identifiants et sauvegarde TFTP`,
      competencesE4: [
        "Gérer le patrimoine informatique (Sauvegarde des configurations SG300-10 et HP 2620-24)",
        "Travailler en mode projet (Préparation d'un annuaire de commandes multi-constructeurs)"
      ]
    }
  },
  {
    id: "proj-sylvia-pkt",
    title: "Projet Sylvia — Architecture réseau multi-sites & DMZ sous Cisco Packet Tracer",
    category: "reseau",
    categoryLabel: "Architecture Multi-Sites & DMZ",
    context: "Étude de cas Réseau • 18/10/2026",
    description:
      "Modélisation et configuration complète sous Packet Tracer de l'infrastructure du groupement d'intérêt économique (GIE) Sylvia reliant les sites distants (Société d'Élagage Canonic, cabinet Géod & Zik par liaison louée Transfix), une zone démilitarisée (DMZ) et le réseau Internet.",
    tags: [
      "Cisco Packet Tracer",
      "Architecture Multi-Sites",
      "DMZ & Filtrage",
      "Routage & DHCP Routeur",
      "Serveurs Intranet / SIG"
    ],
    docUrl: "assets/docs/projets/TP_Projet_Sylvia_Esteban_Payen.docx",
    secondDocUrl: "assets/docs/projets/packet_silvia.pkt",
    docLabel: "Dossier technique (.docx)",
    secondDocLabel: "Maquette (.pkt)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Moderniser la topologie en remplaçant les concentrateurs (hubs) par des commutateurs administrables et définir le plan d'adressage des 5 zones (GIE, SEC, GEO, DMZ, Internet).",
        "Configurer l'attribution IP dynamique des postes clients via des pools DHCP directement sur les routeurs.",
        "Implémenter le routage inter-sites et le cloisonnement de sécurité : autoriser les sociétés Canonic et Géod & Zik à accéder aux serveurs du GIE (Intranet, SIG) tout en interdisant la communication directe entre elles.",
        "Déployer et tester les services hébergés en DMZ et sur le réseau du GIE."
      ],
      architecture:
        "Maquette fonctionnelle Packet Tracer (packet_silvia.pkt) accompagnée de son dossier de conception détaillant les plans d'adressage, tables de routage et tests de connectivité.",
      commandSnippet: `! Contraintes d'architecture GIE Sylvia :\n! - Attribution IP dynamique par service DHCP sur routeurs\n! - Liaison spécialisée Transfix entre GIE Sylvia et Géod & Zik (SIG)\n! - Filtrage inter-entreprises : SEC <-> GIE [OK] | GEO <-> GIE [OK] | SEC <-> GEO [BLOQUÉ]`,
      competencesE4: [
        "Gérer le patrimoine informatique",
        "Travailler en mode projet",
        "Mettre à disposition des utilisateurs un service informatique"
      ]
    }
  },
  {
    id: "proj-2-vm-hyperv",
    title: "Projet 2 — Virtualisation Hyper-V, déploiement d'OS et clonage de machines virtuelles",
    category: "systeme",
    categoryLabel: "Virtualisation & OS",
    context: "TP Système SISR • 18/09/2025",
    description:
      "Activation et administration de l'hyperviseur Microsoft Hyper-V, création de commutateurs virtuels internes, installation de machines virtuelles Windows 10 de référence (EP_WIN_Base), clonage par copie de disque dur virtuel (VHDX) et rédaction d'un guide d'accompagnement utilisateur.",
    tags: [
      "Microsoft Hyper-V",
      "Commutateur Virtuel",
      "Clonage VHDX",
      "Windows 10",
      "Sauvegarde VM",
      "Documentation Utilisateur"
    ],
    docUrl: "assets/docs/projets/Projet2_Installation_VM_HyperV.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Vérifier les prérequis matériels de virtualisation (processeur 64 bits avec SLAT / Intel VT-x) et activer le rôle Hyper-V.",
        "Créer un commutateur virtuel interne et déployer une machine virtuelle master (Génération 1, allocation mémoire dynamique, installation par ISO).",
        "Sauvegarder et dupliquer l'environnement système (SIO1_LH_Win10user1 à partir du disque virtuel de SIO1_LH_Win10base) pour accélérer les déploiements futurs.",
        "Rédiger un support de formation destiné aux utilisateurs finaux pour la prise en main de leur session."
      ],
      architecture:
        "Environnement Hyper-V sur poste de laboratoire du Lycée Robert Schuman avec réseau virtuel interne isolé et banque d'images VHDX.",
      commandSnippet: `# Paramètres recensés et sauvegardés :\nVM Master  : EP_WIN_Base / SIO1_LH_Win10base\nGénération : Génération 1 | RAM : 1024 Mo (Dynamique)\nRéseau     : Commutateur virtuel interne Hyper-V`,
      competencesE4: [
        "Gérer le patrimoine informatique (Recensement des paramètres VM et gestion des sauvegardes EP_WIN_Base)"
      ]
    }
  },
  {
    id: "proj-1-poste-travail",
    title: "Projet 1 — Audit matériel, installation et sécurisation d'un poste de travail",
    category: "systeme",
    categoryLabel: "Poste de Travail & Réseau",
    context: "TP Infrastructure SISR • 03/09/2025",
    description:
      "Audit matériel et logiciel exhaustif d'un poste de travail (SIO6232_P2), normalisation du nommage, séparation des privilèges (compte Administrateur et compte local utilisateur), configuration du serveur proxy académique (Renater) et tests de débit.",
    tags: [
      "Audit Matériel",
      "Windows 10/11",
      "Proxy 172.17.0.1:3128",
      "Gestion des Comptes",
      "Standardisation"
    ],
    docUrl: "assets/docs/projets/Projet1_Poste_de_travail.docx",
    docLabel: "Compte-rendu (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Réaliser l'inventaire complet des composants du poste (Intel Core i5-9500 6 cœurs @ 3.00 GHz, 16 Go DDR4 2666 MHz, SSD Toshiba 128 Go + WD 931 Go, Intel UHD 630).",
        "Appliquer la convention de nommage « SIO6232_P2 » et créer des sessions distinctes (Administrateur et utilisateur standard) pour sécuriser l'exploitation.",
        "Configurer les paramètres réseau et le proxy d'établissement (172.17.0.1 port 3128 sur le réseau Renater).",
        "Valider la connectivité par des tests de performance réseau (Download : 436,16 Mb/s, Upload : 440,19 Mb/s, Latence : 9 ms)."
      ],
      architecture:
        "Salle 6232 du Lycée Robert Schuman (Metz) — Mise en place de l'environnement de travail personnel standardisé pour l'ensemble de la formation BTS SIO.",
      commandSnippet: `Poste      : SIO6232_P2 (Intel Core i5-9500 / 16 Go DDR4 / Dual SSD)\nProxy HTTP : 172.17.0.1:3128 (Opérateur Renater)\nDébit mesuré : ↓ 436.16 Mb/s | ↑ 440.19 Mb/s | Ping : 9 ms`,
      competencesE4: [
        "Gérer le patrimoine informatique (Inventaire exhaustif et habilitations comptes)",
        "Répondre aux incidents et aux demandes d'assistance et d'évolution",
        "Organiser son développement professionnel (Environnement d'apprentissage personnel)"
      ]
    }
  },

  /* ==========================================================================
     RÉALISATIONS EN MILIEU PROFESSIONNEL (STAGE BTS SIO 1RE ANNÉE — BURO24 / FCC)
     ========================================================================== */
  {
    id: "stage-win-server-2025",
    title: "Mission Stage — Déploiement physique HP ProLiant, RAID 5 & Windows Server 2025",
    category: "stage",
    categoryLabel: "Stage Buro24 / FCC • Serveur",
    context: "Stage 1re année • 21/05/2026",
    description:
      "Préparation physique d'un serveur HP ProLiant, mise à jour des firmwares via HP SPP (BIOS, iLO, Smart Array), étude comparative et configuration d'une grappe RAID 5 matérielle, installation de Windows Server 2025 Standard et mise en production.",
    tags: [
      "HP ProLiant",
      "Windows Server 2025",
      "RAID 0 / 1 / 5",
      "HP Smart Array",
      "HP SPP & iLO",
      "Mise en production"
    ],
    docUrl: "assets/docs/stages/E5_PAYEN_ESTEBAN_CR_STAGE1.docx",
    docLabel: "Rapport de stage (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Vérifier l'état matériel du serveur HP ProLiant (baies disques, alimentations, câblage) et mettre à jour les micrologiciels via HP Service Pack for ProLiant (SPP).",
        "Expérimenter les niveaux RAID 0, RAID 1 et RAID 5 dans HP Smart Array et retenir le RAID 5 (parité distribuée sur 3 disques) pour allier performance et tolérance aux pannes.",
        "Installer Windows Server 2025 Standard sur le volume logique RAID 5, installer les pilotes HP (Support Pack, iLO Amplifier, AMS) et résoudre les problèmes de régulation thermique/ventilation.",
        "Configurer l'adressage IP fixe, le DNS, le pare-feu et l'accès Bureau à distance (RDP)."
      ],
      architecture:
        "Serveur physique HP ProLiant déployé au sein de l'infrastructure Buro24 / FCC Informatique à Metz-Augny.",
      commandSnippet: `Matériel   : Serveur HP ProLiant (Administration hors-bande HP iLO)\nStockage   : Contrôleur HP Smart Array -> Volume logique RAID 5 (3 disques)\nFirmware   : Mise à jour complète via HP SPP (Service Pack for ProLiant)\nSystème    : Windows Server 2025 Standard (IP fixe, DNS, RDP activé)`,
      competencesE4: [
        "Gérer le patrimoine informatique (Normes constructeur HP SPP/iLO et continuité de service RAID 5)",
        "Mettre à disposition des utilisateurs un service informatique (Tests d'intégration RAID/RDP et déploiement)"
      ]
    }
  },
  {
    id: "stage-hotline-glpi",
    title: "Mission Stage — Support Hotline (Support Immédiat, Régulation, Traitement), AD & M365",
    category: "stage",
    categoryLabel: "Stage Buro24 / FCC • Support & AD",
    context: "Stage 1re année • 13/05/2026",
    description:
      "Participation à la Hotline informatique structurée en 3 phases (Support Immédiat, Régulation, Traitement) : prise en main à distance TeamViewer, administration Active Directory et Microsoft 365 / Exchange Online, et traçabilité complète des tickets sous GLPI.",
    tags: [
      "Hotline ITIL",
      "GLPI Ticketing",
      "Active Directory",
      "Microsoft 365 / Exchange",
      "TeamViewer QS",
      "Diagnostic Réseau"
    ],
    docUrl: "assets/docs/stages/EP_CR_Hotline.docx",
    docLabel: "Dossier Hotline (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Appliquer l'organisation en 3 modes de la Hotline : Support Immédiat (qualification < 5 min, intervention < 15 min), Régulation (tri des flux, réponse mail < 15 min) et Traitement (résolution de fond).",
        "Prendre en charge les incidents utilisateurs à distance via TeamViewer QuickSupport sans divulguer les identifiants administrateur.",
        "Administrer les comptes et groupes de sécurité dans Active Directory ainsi que les licences et boîtes aux lettres dans Microsoft 365 / Exchange Online.",
        "Rédiger, catégoriser, suivre et clôturer chaque ticket d'incident ou de demande dans GLPI."
      ],
      architecture:
        "Centre de support et télémaintenance Buro24 / FCC Informatique (Metz-Augny) supervisant les parcs clients PME.",
      commandSnippet: `Organisation Hotline :\n1. Support Immédiat : Qualification <= 5 min | Intervention <= 15 min\n2. Régulation       : Traitement e-mails <= 15 min & renfort dès 2 appels en attente\n3. Traitement       : Incidents complexes, sauvegardes, documentation & clôture GLPI`,
      competencesE4: [
        "Répondre aux incidents et aux demandes d'assistance et d'évolution (Collecte, suivi GLPI, AD/M365)",
        "Développer la présence en ligne de l'organisation (Qualité de service et faible taux d'abandon)"
      ]
    }
  },
  {
    id: "stage-masterisation-pc",
    title: "Mission Stage — Préparation, sécurisation BitLocker, jonction AD, RMM & VPN de postes clients",
    category: "stage",
    categoryLabel: "Stage Buro24 / FCC • Déploiement",
    context: "Stage 1re année • 03/06/2026",
    description:
      "Industrialisation de la préparation de postes fixes et portables pour les entreprises clientes : installation Windows 10/11 Pro, chiffrement BitLocker (TPM 2.0), jonction au domaine Active Directory, déploiement d'agent RMM, Microsoft 365, client VPN et pare-feu OPNsense / NAS.",
    tags: [
      "Windows 10/11 Pro",
      "BitLocker / TPM 2.0",
      "Jonction Domaine AD",
      "Agent RMM",
      "VPN & Antivirus",
      "OPNsense / NAS"
    ],
    docUrl: "assets/docs/stages/E5_PAYEN_ESTEBAN_CR_STAGE1.docx",
    docLabel: "Rapport de stage (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Installer Windows 10/11 Pro, appliquer les mises à jour systèmes/pilotes BIOS/PCI et étiqueter le matériel dans l'inventaire GLPI.",
        "Activer le chiffrement de disque BitLocker via puce TPM 2.0 sur les portables professionnels et sauvegarder les clés de récupération.",
        "Joindre les machines au domaine Active Directory de l'entreprise cliente (via tunnel VPN si distant), désactiver les comptes locaux et appliquer les habilitations.",
        "Déployer l'agent de télégestion RMM, la suite Microsoft 365 (Outlook/Exchange), l'antivirus centralisé, ainsi que mettre à jour des équipements OPNsense (sur boîtier Sophos) et serveurs NAS."
      ],
      architecture:
        "Atelier de préparation et déploiement Buro24 / FCC Informatique (Rue du Prayon, 57685 Augny).",
      commandSnippet: `Pipeline de mise en service poste entreprise :\n[1] Installation Windows Pro + Drivers + BIOS SecureBoot/TPM 2.0\n[2] Chiffrement BitLocker (C:) + Sauvegarde clé de récupération\n[3] Nommage normalisé + Étiquetage GLPI + Jonction Domaine AD\n[4] Déploiement Agent RMM + Microsoft 365 + Client VPN + Antivirus`,
      competencesE4: [
        "Gérer le patrimoine informatique (Étiquetage parc, enregistrement GLPI, habilitations AD)",
        "Travailler en mode projet (Planification des déploiements selon les commandes clients)",
        "Mettre à disposition des utilisateurs un service informatique (Déploiement OS, RMM, M365, VPN)"
      ]
    }
  },
  {
    id: "stage-imprimante-mf259",
    title: "Mission Stage — Assemblage mécanique, calibration et mise en réseau d'imprimantes multifonctions",
    category: "stage",
    categoryLabel: "Stage Buro24 / FCC • Périphériques Réseau",
    context: "Stage 1re année • 27/05/2026",
    description:
      "Assemblage complet tri-blocs d'imprimantes professionnelles multifonctions (MF259 / Olivetti), câblage interne DisplayPort et alimentation, paramétrage menu service constructeur, calibration optique du scanner, mise à jour firmware par USB et activation AirPrint / Scan-to-Mail.",
    tags: [
      "Imprimante Réseau MF259",
      "Firmware Update",
      "AirPrint & Scan-to-Mail",
      "Calibration Optique",
      "Documentation Technique"
    ],
    docUrl: "assets/docs/stages/E5_PAYEN_ESTEBAN_CR_STAGE1.docx",
    docLabel: "Rapport de stage (.docx)",
    isPlaceholder: false,
    details: {
      objectifs: [
        "Inventorier les pièces et assembler les 3 modules (partie basse, unité principale et scanner supérieur) en respectant le passage des câbles DisplayPort et les verrouillages mécaniques.",
        "Installer le collecteur et les cartouches de toner, configurer le mot de passe administrateur et activer la fonction numérisation via le menu service constructeur.",
        "Calibrer la vitre de numérisation, mettre à jour le micrologiciel (firmware) via clé USB FAT32 au démarrage et configurer les services réseaux AirPrint et Scan-to-Mail.",
        "Rédiger une documentation interne de montage et de dépannage pour l'équipe technique."
      ],
      architecture:
        "Intervention et préparation matérielle en atelier Buro24 / FCC Informatique à Augny.",
      commandSnippet: `Procédure Menu Service & Firmware :\n- Accès Service Mode : Stop -> 0 -> 0 -> Stop -> 0 -> 1\n- Calibration vitre scanner & réglage horloge système\n- Flash Firmware via USB FAT32 au boot + Configuration AirPrint & Scan-to-Mail`,
      competencesE4: [
        "Gérer le patrimoine informatique (Inventaire des composants et respect des procédures constructeur)",
        "Mettre à disposition des utilisateurs un service informatique (Calibration, tests et mise en service réseau)"
      ]
    }
  }
];

/**
 * ============================================================================
 * DONNÉES DE LA VEILLE TECHNOLOGIQUE (BTS SIO SISR)
 * Sujet définitif : Le déploiement du Wi-Fi 7 (802.11be) et son impact sur
 *                   le réseau filaire (Switching / PoE)
 * ============================================================================
 */
const VEILLE_CONFIG = {
  themeTitle:
    "Le déploiement du Wi-Fi 7 (802.11be) et son impact sur le réseau filaire (Switching / PoE)",
  problematique:
    "Quels sont les défis techniques et les impacts sur l'infrastructure de commutation filaire liés à l'adoption du Wi-Fi 7 (802.11be) en entreprise ?",
  themeAlternative:
    "L'arrivée du Wi-Fi 7 (norme IEEE 802.11be) ne se résume pas à une simple évolution radio : avec des débits théoriques multipliés (jusqu'à 46 Gbps), des canaux de 320 MHz et l'agrégation simultanée de plusieurs bandes de fréquences (MLO sur 2.4 GHz, 5 GHz et 6 GHz), les bornes d'accès deviennent ultra-exigeantes. Sans un redimensionnement de l'infrastructure filaire en amont — ports switchs Multi-Gigabit (2.5G / 5G / 10G - IEEE 802.3bz), budget d'alimentation PoE+ / PoE++ (IEEE 802.3bt) accru et mise à niveau des liens Uplink vers le cœur de réseau —, le réseau commuté devient un véritable goulot d'étranglement.",
  keywords: [
    "IEEE 802.11be (Wi-Fi 7)",
    "Bande 6 GHz",
    "MLO (Multi-Link Operation)",
    "Canaux 320 MHz & 4K-QAM",
    "Switchs Multi-Gigabit (802.3bz - 2.5G/5G/10G)",
    "PoE+ / PoE++ (IEEE 802.3bt)",
    "Sécurité WPA3-Enterprise (802.1X / RADIUS)"
  ],
  tools: [
    { name: "Feedly (Flux RSS)", type: "Agrégateur de flux RSS spécialisés réseau" },
    { name: "Google Alerts", type: "Alertes sur les normes IEEE 802.11be / Wi-Fi 7 / 802.3bt" },
    { name: "Blogs Cisco / HPE Aruba / D-Link", type: "Veille constructeurs & Livres blancs" },
    { name: "Publications Réseau & IT", type: "Hub One, IEEE Standards, Datasheets" }
  ],
  impactsSISR: [
    {
      icon: "⚡",
      badge: "Axe 01 // Commutation & Uplink",
      title: "Débit & Commutation",
      description:
        "Passage obligatoire du Gigabit classique (1 Gbps) au Multi-Gigabit (2.5G / 5G / 10G - IEEE 802.3bz) sur les ports d'accès connectant les bornes, et redimensionnement des liens Trunk/Uplink vers le cœur de réseau (25G / 40G / 100G)."
    },
    {
      icon: "🔌",
      badge: "Axe 02 // Alimentation & Cuivre",
      title: "Énergie & Câblage",
      description:
        "Bascule vers le PoE++ (IEEE 802.3bt - jusqu'à 60W/90W) pour alimenter les bornes tri-bandes à pleine puissance et vérification de la certification du câblage cuivre (Cat 6A minimum recommandé pour tenir le 10 Gbps et dissiper la chaleur du PoE++)."
    },
    {
      icon: "🛡️",
      badge: "Axe 03 // Contrôle d'accès",
      title: "Sécurité WPA3 & 802.1X",
      description:
        "Obligation d'utiliser le chiffrement WPA3 (requis par le standard pour exploiter la bande 6 GHz) couplé à une authentification robuste 802.1X / serveur RADIUS (WPA3-Enterprise) en environnement professionnel."
    }
  ]
};

const VEILLE_DATA = [
  {
    id: "veille-wifi7-dlink",
    date: "Année 2026",
    title: "2026 : l'année de la bascule technologique pour le réseau",
    summary:
      "Analyse du corollaire direct de l'adoption du Wi-Fi 7 en entreprise : l'augmentation massive des débits sans fil déplace la contrainte vers le réseau filaire. Si la couche de commutation (switching Multi-Gigabit, agrégation de liens uplink et budget PoE) n'est pas repensée, l'infrastructure filaire devient le principal goulot d'étranglement.",
    sourceName: "D-Link Blog Entreprise (2026)",
    sourceUrl: "https://www.dlink.com/fr",
    tags: ["Switching", "Multi-Gigabit", "PoE", "Infrastructure"]
  },
  {
    id: "veille-wifi7-hubone",
    date: "Octobre 2025",
    title: "Wi-Fi 7 : que change-t-il pour les réseaux professionnels et les lieux publics ?",
    summary:
      "Détail des apports techniques majeurs de la norme IEEE 802.11be en environnement professionnel : réduction drastique de la latence et fiabilité accrue grâce au MLO (Multi-Link Operation), élargissement des canaux à 320 MHz sur la bande 6 GHz et gestion optimisée de la très haute densité d'utilisateurs.",
    sourceName: "Hub One (Octobre 2025)",
    sourceUrl: "https://www.hubone.fr",
    tags: ["802.11be", "MLO", "Bande 6 GHz", "Haute Densité"]
  },
  {
    id: "veille-wifi7-cisco-aruba",
    date: "Livres blancs & Datasheets",
    title: "Déploiement matériel Wi-Fi 7 : exigences PoE++ et débits sur bornes Cisco Catalyst CW917x & HPE Aruba Série 700",
    summary:
      "Étude de cas concret sur les prérequis matériels des nouvelles bornes d'accès entreprise. L'activation complète des radios tri-bandes (2.4 GHz, 5 GHz, 6 GHz) nécessite une alimentation PoE++ (802.3bt - jusqu'à 60W) ainsi que des interfaces Ethernet Uplink 5G/10G Base-T (802.3bz) sécurisées via 802.1X.",
    sourceName: "Cisco / HPE Aruba Networking",
    sourceUrl: "https://www.cisco.com/c/fr_ca/products/wireless/catalyst-9100ax-access-points/index.html",
    tags: ["Cisco Catalyst", "HPE Aruba", "PoE++ (802.3bt)", "802.3bz"]
  }
];
