import image1 from '../assets/references/EFH-Neuenkirchen1-1024x596.png';
import image2 from '../assets/references/IMG-20240918-WA0017-1024x768.png';
import image3 from '../assets/references/EFH-Steinfurt1-768x1024.png';
import image4 from '../assets/references/EFH-Emsdetten1-768x1024.png';

export const REFERENCES = [
    {
        id: '01965cb7-b2c1-7cf5-a508-389a8cac99c8',
        title: 'PV-Anlage Neuenkirchen',
        power: '9,43 kWp',
        image: image1,
        location: 'Neuenkirchen',
        description: '',
        details: [
            { label: 'Anlagenleistung', value: '9,43 kWp (Süd-West)' },
            { label: 'Unterkonstruktion', value: 'EKV Nord' },
            {
                label: 'Modulleistung',
                value: '23x Sharp 410Wp'
            },
            { label: 'Wechselrichter', value: '1x Kaco' },
            { label: 'Wallbox', value: 'ABL' }
        ]
    },
    {
        id: '01965cb7-ce67-781c-a42d-b7491cfd3e7e',
        title: 'PV-Anlage Borghorst',
        power: '16,8 kWp',
        image: image2,
        location: 'Borghorst',
        description: '',
        details: [
            { label: 'Anlagenleistung', value: '16,8 kWp (Ost, West)' },
            {
                label: 'Unterkonstruktion',
                value: 'K2 Systems'
            },
            { label: 'Modulleistung', value: '40x Jolywood 420Wp' },
            {
                label: 'Wechselrichter',
                value: '1x SMA (Hybrid)'
            },
            { label: 'Speicher', value: '1x BYD HVS 12.8 kWh' },
            { label: 'Wallbox', value: '1x SMA' }
        ]
    },
    {
        id: '01965cb7-f530-72bd-8d22-1b40909e9806',
        title: 'PV-Anlage Steinfurt',
        power: '5,72 kWp',
        image: image3,
        location: 'Steinfurt',
        description: '',
        details: [
            { label: 'Anlagenleistung', value: '5,72 kWp (Süd-West)' },
            {
                label: 'Unterkonstruktion',
                value: 'K2 Systems'
            },
            { label: 'Modulleistung', value: '13x Trina Solar 440Wp' },
            {
                label: 'Wechselrichter',
                value: 'Kostal (Hybrid)'
            },
            { label: 'Speicher', value: 'BYD HVS 5.1 kWh' }
        ]
    },
    {
        id: '01965cb8-16fc-73ec-96d5-f2abd4118e60',
        title: 'PV-Anlage Emsdetten',
        power: '9,57 kWp',
        image: image4,
        location: 'Emsdetten',
        description: '',
        details: [
            { label: 'Anlagenleistung', value: '9,57 kWp (Süd)' },
            {
                label: 'Unterkonstruktion',
                value: 'K2 Systems'
            },
            { label: 'Modulleistung', value: '22x Trina Solar 435Wp' },
            {
                label: 'Wechselrichter',
                value: 'Huawei (Hybrid)'
            },
            { label: 'Speicher', value: 'Huawei Luna 5 kWh' }
        ]
    }
];
