import Component from '@ember/component';
import { ajax } from 'discourse/lib/ajax';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);

        //   const apiUrl = 'https://www.qnap.com/api/v1/articles/news?locale=en';

        //   ajax(apiUrl, {
        //     method: 'GET'
        //   }).then((data) => {
        //     let news = data.data;
        //     news.sort((a, b) => new Date(b.date) - new Date(a.date));
        //     news.splice(3);
        //     this.set('news', news);
        //     console.log(news);
        //   }).catch((error) => {
        //     console.error('Error fetching:', error);
        //   });
        const newsData = [
            {
                "title": "QNAP 4-bay 2.5GbE NAS TS-464 Honored with the European Hardware Awards 2024",
                "image_url": "https://www.qnap.com/images/news/pr-ts-464-european-hardware-awards-2024.jpg",
                "desc": "  Taipei, Taiwan, July 22, 2024 - Recognized by more than 100 expert editors from Europe&rsquo;s leading tech publications, QNAP&rsquo;s TS-464 4-bay 2.5GbE NAS has won the honorable European Hardware Awards 2024. With a superior hardware design, the TS-464 combines native 2.5GbE ports, 10GbE networking expandability, quad-core performance, and M.2 SSD caching into one, unleashing its full performance potential and functionality as well as displaying a brand-new aesthetic concept at the same time.    The European Hardware Association proudly concluded its 10th annual awards ceremony at the Courtyard Marriott, Nangang, marking a decade of celebrating the finest in PC technology. Hosted on the eve of COMPUTEX 2024, this prestigious event gathered over 220 industry leaders to honor innovation and excellence in the technology sector.    The European Hardware Association was established to shine a spotlight on companies that are continuing to push the boundaries of technology, celebrating a prosperous future of PC-technology and recognizing innovation and excellence.    See the full list of European Hardware Awards 2024 winners    TS-464 boasts superior performance and expansion capabilities    The TS-464 is a compact 4-bay NAS with superior performance, fulfilling multitasking challenges for file management, backup, collaboration, and video conversion.      \tIntel&reg; Celeron&reg; N5095 4-core/4-thread processor enables multitasking and optimizing performance.  \tTwo built-in 2.5GbE (2.5G/1G/100M) ports enable transmission speeds up to 589 MB/s by setting port trunking.  \tBuilt-in GPU streamlines video transcoding, allowing smooth video streaming to mobile devices.  \tFutureproof network connectivity by installing a PCIe-based dual-port 10GbE network card that delivers up to 1,647 MB/s transfer speed.  \tTwo M.2 PCIe Gen 3 slots allow for installing NVMe SSDs to configure a high-speed SSD volume or cache acceleration.    ",
                "url": "/en/news/2024/qnap-4-bay-2-5gbe-nas-ts-464-honored-with-the-european-hardware-awards-2024",
                "date": "2024-07-22"
            },
            {
                "title": "QNAP Officially Releases Qsirch 5.4.2: Enhanced AI-powered Semantic Search and Precise Image Search on NAS",
                "image_url": "https://www.qnap.com/images/news/qsirch-5.4.2_PR1164_en.jpg",
                "desc": "Taipei, Taiwan, July 18, 2024 &ndash; QNAP&reg; Systems, Inc., a leading innovator in computing, networking, and storage solutions, today officially launched Qsirch 5.4.2. With new features such as AI-driven semantic search for images, similar image search, and quick document content preview, NAS users can now enjoy a more precise and user-friendly file search experience, significantly enhancing their productivity.    Qsirch is a search engine for QNAP NAS, allowing users to quickly find desired files from vast amounts of files and data. In addition to using &ldquo;keyword search&rdquo; for files, images, videos, PDF documents, and emails, users can benefit from Qsirch 5.4.2&rsquo;s &ldquo;AI-powered semantic search&rdquo;, that leverages an AI model capable of analyzing intent and context of user queries. Semantic search allows users to quickly find precise results from using plain-language prompts and phrases.    &ldquo;Qsirch has always been the top productivity tool for QNAP NAS users. To raise the bar with Qsirch, we have integrated AI-powered semantic search which has the potential to greatly enhance user productivity. We greatly appreciate the valuable feedback we received from our Qsirch 5.4.0 semantic search beta testers, which has enabled the QNAP development team to continually optimize the official release of Qsirch 5.4.2.&quot; said Amol Narkhede, Senior Product Manager of QNAP, adding &ldquo;In the AI era, AI-driven semantic search breaks through the limitation of traditional keyword search, allowing users to use their everyday search habits to find desired content with higher accuracy.    Key features of Qsirch 5.4.2      \t  \tAI-driven Semantic Search  \tUse natural language to create detailed prompts (23 languages supported) to effectively filter search results.  \t  \t  \tFind similar images  \tExplore similar images from search results. Users can easily find similar images or photos stored on their QNAP NAS.  \t  \t  \tQuick View of Documents  \tAfter searching for files, users can quickly preview content, view keyword-relevant paragraphs, or see a few relevant sentences from the file in the preview pane.  \t      NAS system requirements      \tA 64-bit x86-based NAS with at least 8 GB RAM.  \tQTS 5.0.1 (or later) or QuTS hero h5.0.1 (or later).  \tQNAP AI Core must be installed from the App Center to use the full functions of semantic search.      Learn more about Qsirch 5.4.2 at https://www.qnap.com/go/software/qsirch    Note: Features are subject to change and may not be available for all QNAP products.  ",
                "url": "/en/news/2024/qnap-officially-releases-qsirch-5-4-2-enhanced-ai-powered-semantic-search-and-precise-image-search-on-nas",
                "date": "2024-07-18"
            },
            {
                "title": "QNAP Introduces 24-Port 10GbE L3 Lite Managed Switch, QSW-M3224-24T, Realizing High Availability in IT Rooms",
                "image_url": "https://www.qnap.com/images/news/QSW-M3224-24T_PR1161_en.jpg",
                "desc": "Taiwan, Taipei, July 17, 2024 - QNAP&reg; Systems, Inc., a leading computing, networking, and storage solutions innovator, today released its first full 10GbE L3 Lite managed switch, QSW-M3224-24T. Featuring twenty-four 10G Multi-Gig ports, L3 Lite management capabilities and MC-LAG network redundancy, QSW-M3224-24T assists enterprises in deploying stable and efficient mid to large-scale high-speed network infrastructure, accelerating 4K video streaming and AV-over-IP applications.    &quot;As enterprises grow in scale and the number of networked devices increases, the demand for switches also escalates, making the management of large network infrastructure more complex and challenging.&rdquo; said Jerry Deng, Product Manager of QNAP, adding &ldquo;as QNAP&#39;s first L3 managed switch offering multi-port 10GbE networking and advanced L3 management features, QSW-M3224-24T not only fulfills the needs of low-latency and high-density 10G network applications, but also supports advanced IP routing and network segmentation management. QSW-M3224-24T is ideal for small and medium-sized enterprises to expand their LAN efficiently and securely within a limited budget.&quot;    The QSW-M3224-24T adopts the latest QNAP Switch System (QSS) Pro network management software. QSS Pro provides L3 Lite management including IP settings (IPv4, IPv6, DNS), static routing, DHCP server, SNTP, and advanced VLAN features to enable more granular deployment and management of segmented network transmission infrastructures. It also supports Multi-chassis Link Aggregation (MC-LAG) to ensure uninterrupted switch networking, providing high availability and fault tolerance. With IGMP Snooping functions and SNMP management, along with an AV-over-IP wizard, the QSW-M3224-24T can connect multiple AV endpoints and forward multicast traffic to avoid network congestion and unnecessary data transmission. This reduces latency and improves network connection efficiency while enabling optimized network management.    The QSW-M3224-24T comes with twenty-four 10GbE RJ45 ports, which is compatible with Multi-Gigabit NBASE-T (10G / 5G / 2.5G / 1G) technologies and provides with up to 480Gbps of switching capacity for connecting multiple L2 managed switches, unmanaged switches, and high-speed network devices. Up to 10Gbps speed per 10GbE RJ45 port can be achieved using CAT 6a cables (or better). It also provides Layer 2 management functions (such as LACP, ACL and QoS) for efficient network bandwidth controls and enhanced network security, and Rapid Spanning Tree Protocol (RSTP) for users to deploy small/medium-scale networks that support expansion, redundancy, and loop prevention.    Key Specifications      \tQSW-M3224-24T:  \t1U Rackmount, 24x 10GbE RJ45 ports (Compliant with NBASE-T technologies to support multi-speeds of 10GBASE-T/5GBASE-T/2.5GBASE-T/1000BASE-T/100BASE-TX), up to 480Gbps switching capacity; compliant with IEEE 802.3x; Auto Negotiation      For more information and to view the full QNAP lineup, please visit www.qnap.com.  ",
                "url": "/en/news/2024/qnap-introduces-24-port-10gbe-l3-lite-managed-switch-qsw-m3224-24t-realizing-high-availability-in-it-rooms",
                "date": "2024-07-17"
            }
        ];

        this.set("news", newsData);
    }
});
