// --- URLs y datos iniciales ---

// URLs paginas
const urlsOriginales = [
    "https://drive.google.com/file/d/1GVsSTRmVmM5KckDmG53ZjlOZzn6m4AdX/view?usp=drivesdkPag_1.png",
    "https://drive.google.com/file/d/1IkX3hp395dX_t1_oWYSJW_BBN9H_O0di/view?usp=drivesdkPag_2.png",
    "https://drive.google.com/file/d/1PlC71l_MiGSB6PZwOaw67hHFc1-odxSb/view?usp=drivesdkPag_3.png",
    "https://drive.google.com/file/d/1rQ8aFhCxBb5laiy3KuKhG6eeAEujarKj/view?usp=drivesdkPag_4.png",
    "https://drive.google.com/file/d/12ddfp2rxh3HYBQQl_VNxb5cPWF1xApa9/view?usp=drivesdkPag_5.png",
    "https://drive.google.com/file/d/1z2TP0x5ChuV6-8chv5jXt_totzb5PCau/view?usp=drivesdkPag_6.png",
    "https://drive.google.com/file/d/1XxZ7OXU8qyECdmltiv7vn33wSg4gkgeK/view?usp=drivesdkPag_7.png",
    "https://drive.google.com/file/d/1aM1oxOMBrDKoVB-Yd2nYl0GhizRYRcMD/view?usp=drivesdkPag_8.png",
    "https://drive.google.com/file/d/139XBKFjdPbDffhwpAbRx-Ra6vj6gBb5p/view?usp=drivesdkPag_9.png",
    "https://drive.google.com/file/d/1aBq27o9ZneWfN1kBcD4HcnUFmat3VNXK/view?usp=drivesdkPag_10.png",
    "https://drive.google.com/file/d/139DeaAeRDlr91JAdJ5Q74LHTH1Gjju_b/view?usp=drivesdkPag_11.png",
    "https://drive.google.com/file/d/1AuNqLCDnirBQya_5FX5bRv3wVf0RK103/view?usp=drivesdkPag_12.png",
    "https://drive.google.com/file/d/12tOcAMUax48EOdtbMmXCTx2O3-lFjCew/view?usp=drivesdkPag_13.png",
    "https://drive.google.com/file/d/1d8F4wMTzGtCUBxGLL071k6c5gpWTphIa/view?usp=drivesdkPag_14.png",
    "https://drive.google.com/file/d/1LUgusXHxYUyDnaOMKD9m3Lxeqrnky46j/view?usp=drivesdkPag_15.png",
    "https://drive.google.com/file/d/1Y1fOUh4xqUL9EGsDQFS7z-Y45wvJymLY/view?usp=drivesdkPag_16.png",
    "https://drive.google.com/file/d/1wlE-zjub0PY4i4WnCnM767yI5zEl5-mR/view?usp=drivesdkPag_17.png",
    "https://drive.google.com/file/d/16SrS8o0mXga5OQ-HwQZXpt5XRdQJ98I0/view?usp=drivesdkPag_18.png",
    "https://drive.google.com/file/d/1FSDsbWL-AEiAz-S3mZDc5VYrrKg6only/view?usp=drivesdkPag_19.png",
    "https://drive.google.com/file/d/1meuKcD_sKBpAZSlUbS-UmLqaTxaL-QUi/view?usp=drivesdkPag_20.png",
    "https://drive.google.com/file/d/11HQTO22oDEAG26PSSCD69_i-Gau8H0sh/view?usp=drivesdkPag_21.png",
    "https://drive.google.com/file/d/1alNS4tOhXukmOYBWV8A9H2FJ8o8XXLL3/view?usp=drivesdkPag_22.png",
    "https://drive.google.com/file/d/1ETDoyDw6NE2p-xSAn8Gn51om6KuUaYLB/view?usp=drivesdkPag_23.png",
    "https://drive.google.com/file/d/1fLfjCzJtmppeCNEOC5EmLKRFG9_zDjP-/view?usp=drivesdkPag_24.png",
    "https://drive.google.com/file/d/1n8I1vPyxLLtb-KmY_FH_IDLLWbdn2sNR/view?usp=drivesdkPag_25.png",
    "https://drive.google.com/file/d/1idn40BW-N9pnbKIpnWp18WBkDveTxJE7/view?usp=drivesdkPag_26.png",
    "https://drive.google.com/file/d/1u0Estt8VzSjA5IGqNz-ej6NdIrpQeI1n/view?usp=drivesdkPag_27.png",
    "https://drive.google.com/file/d/1z4iCiy5y7vfnCljVkrZFAKzhm0h5DcTm/view?usp=drivesdkPag_28.png",
    "https://drive.google.com/file/d/1nRzNiWLW9DQ_OKZUFt2zefj7sfZSCkiG/view?usp=drivesdkPag_29.png",
    "https://drive.google.com/file/d/1CVJmOUiII5bzrecgUi6lBumbyT7gVr97/view?usp=drivesdkPag_30.png",
    "https://drive.google.com/file/d/1VGMgPSG-JmkLdPvB6fCGLeM8Hem_fMVg/view?usp=drivesdkPag_31.png",
    "https://drive.google.com/file/d/1e9D1KewKiTwSLMSuk_6KFPmd3m_l6fSN/view?usp=drivesdkPag_32.png",
    "https://drive.google.com/file/d/1a4DkbzpgPqB2paqMuV_14kVjvUqfw0nY/view?usp=drivesdkPag_33.png",
    "https://drive.google.com/file/d/1ltV9TnLJQ9mGbse4MZWEX1ld2FW7y_gg/view?usp=drivesdkPag_34.png",
    "https://drive.google.com/file/d/1enZnCuyXke-BasoSMC2ixVX6byuMV_fT/view?usp=drivesdkPag_35.png",
    "https://drive.google.com/file/d/1fRd_VN93EZ5ka7UFxN7AugAvBOGar-qr/view?usp=drivesdkPag_36.png",
    "https://drive.google.com/file/d/1roF3HzyEBZqCvfTG5_T-EsrnhTsC3X4h/view?usp=drivesdkPag_37.png",
    "https://drive.google.com/file/d/1n-HSSEimPpwvlQY3Yr7-f-tsBRvjwGOV/view?usp=drivesdkPag_38.png",
    "https://drive.google.com/file/d/10vlybwmBq5k-w8rStKGNVZOcxHZedL17/view?usp=drivesdkPag_39.png",
    "https://drive.google.com/file/d/1JExWQgdzO509fML745jq4NsCaHrO3Tvp/view?usp=drivesdkPag_40.png",
    "https://drive.google.com/file/d/1do8ZGWKV6HygBUdUkBHY9O4nPCYN26n5/view?usp=drivesdkPag_41.png",
    "https://drive.google.com/file/d/1hvXq_6gpdJUqBAuT5NagPov-iA64aslc/view?usp=drivesdkPag_42.png",
    "https://drive.google.com/file/d/1yi-CrM47pgtqI_j7h_s4ptdKEOPHfWDN/view?usp=drivesdkPag_43.png",
    "https://drive.google.com/file/d/1f6ZuIdkEjmX9dEigf3SBCeR-sKO9tEhj/view?usp=drivesdkPag_44.png",
    "https://drive.google.com/file/d/1BqfwhxJ1DuFWAakRhYrgsxAfUEzDALgQ/view?usp=drivesdkPag_45.png",
    "https://drive.google.com/file/d/1yYqMtORnkJxcqBqark9GicLsHRf6BZO9/view?usp=drivesdkPag_46.png",
    "https://drive.google.com/file/d/1Djy1SgNCW5zwrk5LDlExzNvxHLPLJmew/view?usp=drivesdkPag_47.png",
    "https://drive.google.com/file/d/1IUt_QHBhC63Lvepa02F3CgjJlsOoyIPs/view?usp=drivesdkPag_48.png",
    "https://drive.google.com/file/d/1w03eZu9HjEdBu0rXT71TTjmxumm41le8/view?usp=drivesdkPag_49.png",
    "https://drive.google.com/file/d/1ITs3s3EmcTHHAbCm-7xkl9COlOTF0bts/view?usp=drivesdkPag_50.png",
    "https://drive.google.com/file/d/1irJOnpzIMCxqdxybIhlGmnh4yPY7qjnk/view?usp=drivesdkPag_51.png",
    "https://drive.google.com/file/d/1OhMfj2VDiBhn62g8y3G_cQm2hAE0JZHZ/view?usp=drivesdkPag_52.png",
    "https://drive.google.com/file/d/1AqSlRzr4KTZgap4LfW33_tBw9sfDV-eC/view?usp=drivesdkPag_53.png",
    "https://drive.google.com/file/d/1oeQB1zxiNx_sS4m-wqJQWfwYrtr6Kigp/view?usp=drivesdkPag_54.png",
    "https://drive.google.com/file/d/1ZWdz7WjFrSGjDbQlOUYq61rZ_YlGEBF9/view?usp=drivesdkPag_55.png",
    "https://drive.google.com/file/d/15-1YyUIYhHcFnqmgM_JONnUzX8xxDo6d/view?usp=drivesdkPag_56.png",
    "https://drive.google.com/file/d/1FD-XA0CKxD1Bv2ZY0jxqTzEv_ls5KS3c/view?usp=drivesdkPag_57.png",
    "https://drive.google.com/file/d/1jC77Yy0GxvXp867mdFbu4He5XAWj02sO/view?usp=drivesdkPag_58.png",
    "https://drive.google.com/file/d/1MRwltwD754uFc1tn0nFNUbZytMeori5c/view?usp=drivesdkPag_59.png",
    "https://drive.google.com/file/d/1FdK6ZNpKuJKFeWjq23QWtMwWcREPQNs3/view?usp=drivesdkPag_60.png",
    "https://drive.google.com/file/d/1qFMCECV37CMLlV205-YEf5GGXK598r2a/view?usp=drivesdkPag_61.png",
    "https://drive.google.com/file/d/1TBYhzcyiVVl-7TbBrN__V4g2B3TZIUQP/view?usp=drivesdkPag_62.png",
    "https://drive.google.com/file/d/1MFkNZT62aT4Au8LOnJjjgTqW2sH_4iiX/view?usp=drivesdkPag_63.png",
    "https://drive.google.com/file/d/1egSUbVDNd70jmqxw79OYadSi6YiByXiA/view?usp=drivesdkPag_64.png",
    "https://drive.google.com/file/d/1lRgL6_GoVnYi5k7rFqaJ0qSV-aVVSdx4/view?usp=drivesdkPag_65.png",
    "https://drive.google.com/file/d/15itLZauXqy5LPzfO3Am_l-9uwg6oHLaz/view?usp=drivesdkPag_66.png",
    "https://drive.google.com/file/d/1x34WQUNDyk-MnJVVp6s_ht8jvJto6oJt/view?usp=drivesdkPag_67.png",
    "https://drive.google.com/file/d/1xEc9jAYe6av0FjT4P1jgzSSto9uK1fyB/view?usp=drivesdkPag_68.png",
    "https://drive.google.com/file/d/1V3ciTvbM3Z-gLqRYFRy0SoyV07znphB_/view?usp=drivesdkPag_69.png",
    "https://drive.google.com/file/d/1NAQ0xFsJFKPF4Mq7bPkH1UGX7XVlDzZI/view?usp=drivesdkPag_70.png",
    "https://drive.google.com/file/d/1OcYotlS0bTu_RiRGDhHYTuVoURIU-S4_/view?usp=drivesdkPag_71.png",
    "https://drive.google.com/file/d/1bFCCC8RcK1iKOQKdWXFWHl5dybsXSOxe/view?usp=drivesdkPag_72.png",
    "https://drive.google.com/file/d/1lV3hjmMcftF62d_ZHNBpspzYl3rTrMh2/view?usp=drivesdkPag_73.png",
    "https://drive.google.com/file/d/1_bug9kuY3HWtMVraCmiTGRzKzBbalgm0/view?usp=drivesdkPag_74.png",
    "https://drive.google.com/file/d/1uvEOqatXjvHPdSi5nJgC7R79ZrRc1Rro/view?usp=drivesdkPag_75.png",
    "https://drive.google.com/file/d/1MX6eFP5E9ivwRxx2gCg1Us2-lB-2j27f/view?usp=drivesdkPag_76.png",
    "https://drive.google.com/file/d/1v0CR1-yCO-QBXvsPWAsiB9H04c-qdO9I/view?usp=drivesdkPag_77.png",
    "https://drive.google.com/file/d/1l3wX2_hax3rz8DMPshAHqymSJTaRr0WJ/view?usp=drivesdkPag_78.png",
    "https://drive.google.com/file/d/1xHG8s6NR4kuKO6_5CbUTNGvGKmAF5k_E/view?usp=drivesdkPag_79.png",
    "https://drive.google.com/file/d/13fIs3YtshEmKRJrU7XQHN-qilHreyRjj/view?usp=drivesdkPag_80.png",
    "https://drive.google.com/file/d/1_jjNzO2gexHfO-X4aNr6hd7cgkWlcWmS/view?usp=drivesdkPag_81.png",
    "https://drive.google.com/file/d/1r3qIunQVPKtYddDOXxo8wT1ZQ2USWEMK/view?usp=drivesdkPag_82.png",
    "https://drive.google.com/file/d/1HXVBtMpoSxuGdvreWziRRUuntB7tJDLd/view?usp=drivesdkPag_83.png",
    "https://drive.google.com/file/d/101G38ATTiVgj8NaMRx5VXJPqDE_bDFm_/view?usp=drivesdkPag_84.png",
    "https://drive.google.com/file/d/1u1iM8x9O6gl0m26C_my0BC3xhQTfyuP3/view?usp=drivesdkPag_85.png",
    "https://drive.google.com/file/d/1ikC-EnIZdZ7bhyFCYDADCRL78tEi4tA9/view?usp=drivesdkPag_86.png",
    "https://drive.google.com/file/d/1tG7VD4D9tat8Jx4JR-52F8U-_MwcLp59/view?usp=drivesdkPag_87.png",
    "https://drive.google.com/file/d/1C4yqjxA926QOphaVhQtbWnL7fTUeW9Ki/view?usp=drivesdkPag_88.png",
    "https://drive.google.com/file/d/1QlDOhiOxHWM2f2Jvw5R-2tYO86SDU7bs/view?usp=drivesdkPag_89.png",
    "https://drive.google.com/file/d/1x7npe18q69Z2HGrqtRnKk_tuOdCuspsE/view?usp=drivesdkPag_90.png",
    "https://drive.google.com/file/d/17ip9FRNrOqLQESFJuUlubEU9Dtf_87JP/view?usp=drivesdkPag_91.png",
    "https://drive.google.com/file/d/10paQgMLYsagZuFpNoOO_rkIFCdfYRQq4/view?usp=drivesdkPag_92.png",
    "https://drive.google.com/file/d/17ZQpPpnfTJIzSrrbQL8DlCClxCSGHn2X/view?usp=drivesdkPag_93.png",
    "https://drive.google.com/file/d/1iq1AyDOQK9UrZuwvaiTibvw69kKxD5HW/view?usp=drivesdkPag_94.png",
    "https://drive.google.com/file/d/183j9gJ3GPRXezmxniBm3HXIw7mOj5h8e/view?usp=drivesdkPag_95.png",
    "https://drive.google.com/file/d/1F8tQP1219BVlkRd6dSRBzFwfQgQd6qU-/view?usp=drivesdkPag_96.png",
    "https://drive.google.com/file/d/1Jkp-tZTejrmXPuPQE0DlDlCxr1JlG8mC/view?usp=drivesdkPag_97.png",
    "https://drive.google.com/file/d/1Ybcce4RKs7IUHy1KQcv9d2DQGqED6_X-/view?usp=drivesdkPag_98.png",
    "https://drive.google.com/file/d/1hfjkyOQ7fk6KZsx2K71RCD1YHbn989TN/view?usp=drivesdkPag_99.png",
    "https://drive.google.com/file/d/1vbcL14gtxhbbNm_TYCn7bu41RP7FzUqT/view?usp=drivesdkPag_100.png",
    "https://drive.google.com/file/d/16mPPVrWW0e9ReN52MxU1c1x46fq5WBSe/view?usp=drivesdkPag_101.png",
    "https://drive.google.com/file/d/1KEHCaDe2V18ehAWaa1tK8cLEqomRQZSY/view?usp=drivesdkPag_102.png",
    "https://drive.google.com/file/d/1W6JOqi5LKEeFxd4CsijTFGUiQL6uFJHB/view?usp=drivesdkPag_103.png",
    "https://drive.google.com/file/d/1jovR4yLiuhHpXlFRGzM2_9YGFM8E-CR7/view?usp=drivesdkPag_104.png",
    "https://drive.google.com/file/d/1Q4ezj3NUsZVzIUIpeHgJLyWB4tZ-e-rx/view?usp=drivesdkPag_105.png",
    "https://drive.google.com/file/d/1AWihIcR-2JRFoy4VsIM5YNCXw2u3eYwb/view?usp=drivesdkPag_106.png",
    "https://drive.google.com/file/d/1nWO0MnIiP50S6wDvU63NhQ4V2nNUiqvN/view?usp=drivesdkPag_107.png",
    "https://drive.google.com/file/d/1Q4WIblTETICwAW0TCH6pT8dG932BjbXG/view?usp=drivesdkPag_108.png",
    "https://drive.google.com/file/d/1iCrI2D_uMx4kdXpIIiZXtaD0ShNi4-H9/view?usp=drivesdkPag_109.png",
    "https://drive.google.com/file/d/1cPvXeVfgVOBkyK0tA5AuHnFz5uhqg3rz/view?usp=drivesdkPag_110.png",
    "https://drive.google.com/file/d/1hllOF8E9WnNcmKJM0FYkN0igVxbVichq/view?usp=drivesdkPag_111.png",
    "https://drive.google.com/file/d/1ox1WDK8PbJkTFOaN_tyTQurVnFJLaCkC/view?usp=drivesdkPag_112.png",
    "https://drive.google.com/file/d/1c8QSa3UOLgBP4vF3_EbEeoJw6bzFv_fH/view?usp=drivesdkPag_113.png",
    "https://drive.google.com/file/d/1kjRlN_1k9fzX1recPe75kdD6OGTifrDM/view?usp=drivesdkPag_114.png",
    "https://drive.google.com/file/d/1XN5XasDx-_CkP4EPDVc_evkRJt3Ye6MK/view?usp=drivesdkPag_115.png",
    "https://drive.google.com/file/d/1vQrylX65hewGjn7z-9s7inH4CA5OXiyr/view?usp=drivesdkPag_116.png",
    "https://drive.google.com/file/d/1Cy-CiNymheerU97soepef8Z1GWbywYLF/view?usp=drivesdkPag_117.png",
    "https://drive.google.com/file/d/1mG8E7Ux9SphrRjzJFFsmCa4mlYInOe5G/view?usp=drivesdkPag_118.png",
    "https://drive.google.com/file/d/1Rgs88Qmqhjd9S6gYLIHc5novpAKVr-dY/view?usp=drivesdkPag_119.png",
    "https://drive.google.com/file/d/1Bp6IZVTR6jLi3spi3lbX7mpf96XSgvqN/view?usp=drivesdkPag_120.png",
    "https://drive.google.com/file/d/1xrxUrpG8Rkgs9605-x0DvyImJnpFObhM/view?usp=drivesdkPag_121.png",
    "https://drive.google.com/file/d/1HoToH8BRODH0xU8sKua0_kT_MaSiOPSV/view?usp=drivesdkPag_122.png",
    "https://drive.google.com/file/d/1kCXJUJk6s3wqA3d0Wsrv3oqGWhMa4vPZ/view?usp=drivesdkPag_123.png",
    "https://drive.google.com/file/d/1fGtDNoQwdSkUMYmsnEWkJnLZew13X3FV/view?usp=drivesdkPag_124.png",
    "https://drive.google.com/file/d/1fSNY7Q7DeRPW_ozqQannhzCG9-eMq4ig/view?usp=drivesdkPag_125.png",
    "https://drive.google.com/file/d/1x7zNCxacaySpAGKUIePEh05xFvpb2imw/view?usp=drivesdkPag_126.png",
    "https://drive.google.com/file/d/1vjm3MzvO5z95B1VoggJPuRuyEWM-bNJq/view?usp=drivesdkPag_127.png",
    "https://drive.google.com/file/d/18PDiqFkY3GCEBWTj6tYy4fvCER5p20cI/view?usp=drivesdkPag_128.png",
    "https://drive.google.com/file/d/1Rmr27CMvSMNDUmpB-nWIlZt-YaUoZFZq/view?usp=drivesdkPag_129.png",
    "https://drive.google.com/file/d/1wCPfrBKPRYZ2yMmceFEP1a66127UDQUL/view?usp=drivesdkPag_130.png",
    "https://drive.google.com/file/d/1rvcQWhYj-Oa3bLVqJ5fQYlPqMu3Qrzen/view?usp=drivesdkPag_131.png",
    "https://drive.google.com/file/d/1Up5CIwz_Y1Z92NhUD84vt1IrtdJIJRlQ/view?usp=drivesdkPag_132.png",
    "https://drive.google.com/file/d/1Mad4Gi3YpJjxysjQOcLVuo-xNnvkQ-Gn/view?usp=drivesdkPag_133.png",
    "https://drive.google.com/file/d/1og4hq3upbiUM2zVZO8SyhlrM9m1FMyXm/view?usp=drivesdkPag_134.png",
    "https://drive.google.com/file/d/1y22BPgTLNvJcMeqhCDULE88t7eiOKXoe/view?usp=drivesdkPag_135.png",
    "https://drive.google.com/file/d/1NHG3OVhScOF05rkbh26LeJJxT_blg2Ys/view?usp=drivesdkPag_136.png",
    "https://drive.google.com/file/d/16_vnYnxWriKqA1BIIKSKyWwfaxZNoFvI/view?usp=drivesdkPag_137.png",
    "https://drive.google.com/file/d/1ri7RosbfYF4qha6lMSOvZWWWwh6-fwHQ/view?usp=drivesdkPag_138.png",
    "https://drive.google.com/file/d/1UbOm46dF55R7oZv1gHaOfbFb1ixfaOVj/view?usp=drivesdkPag_139.png",
    "https://drive.google.com/file/d/1_Dp3Vv7WHgtDCxnBsgcuKH9yZgWmgkFF/view?usp=drivesdkPag_140.png",
    "https://drive.google.com/file/d/1yqQIjPIcbtdlopTHvmzsVYgKsILZgsx-/view?usp=drivesdkPag_141.png",
    "https://drive.google.com/file/d/1sHFYGC7MD2osOOvirgaagJ9dUoQ9ARtJ/view?usp=drivesdkPag_142.png",
    "https://drive.google.com/file/d/1qgxvDyXjrx99K34TLGZc3PflfG50fKY3/view?usp=drivesdkPag_143.png",
    "https://drive.google.com/file/d/1AHkGAT0ZAw9qYHAdStH3xuff_U7ta0lf/view?usp=drivesdkPag_144.png",
    "https://drive.google.com/file/d/14BIrlY6zGc11WU1l663KfPVmS8uyDGK1/view?usp=drivesdkPag_145.png",
    "https://drive.google.com/file/d/14yj_sNu3QkH4x_hrmhoynXT17qFjM3qE/view?usp=drivesdkPag_146.png",
    "https://drive.google.com/file/d/1eo8sPwb-J-MlRKbZPOZbgXSQ9smq8AXQ/view?usp=drivesdkPag_147.png",
    "https://drive.google.com/file/d/1nHPw9oIfLYnHF43KJUv_zRuqEKTcVywP/view?usp=drivesdkPag_148.png",
    "https://drive.google.com/file/d/1yc6gR3hnul27f8YsgQOpGMKr7PcYb51m/view?usp=drivesdkPag_149.png",
    "https://drive.google.com/file/d/1EyTvG1U9LmFvwD9ZEfF2G0gILb_TbwQe/view?usp=drivesdkPag_150.png",
    "https://drive.google.com/file/d/1DuqPe6iTYnp9qH2r0ucR9OnRZCXX_mWG/view?usp=drivesdkPag_151.png",
    "https://drive.google.com/file/d/1UDRP4MsXq-JPBGs6M7LbOICdqAcz_vKy/view?usp=drivesdkPag_152.png",
    "https://drive.google.com/file/d/1SauYQq3wmX9cHjVRdxbJIU6gYLZknEJd/view?usp=drivesdkPag_153.png",
    "https://drive.google.com/file/d/1LDx4ypP0x_QMMX7kmiZJgM_Z450is5Nk/view?usp=drivesdkPag_154.png",
    "https://drive.google.com/file/d/1c8rmPnQjQ6Nye6bkAg069HG48DIc3SHz/view?usp=drivesdkPag_155.png",
    "https://drive.google.com/file/d/1Lv3rleXN2YqaOBgdJ0r2_-zvdTxGvqS0/view?usp=drivesdkPag_156.png",
    "https://drive.google.com/file/d/1qIWpmfNjoYkRsKkFht7t2xVuGETjhXsB/view?usp=drivesdkPag_157.png",
    "https://drive.google.com/file/d/1OR_7dgI-MKmzYCsTVjhg83NkC_nhg952/view?usp=drivesdkPag_158.png",
    "https://drive.google.com/file/d/1XMo27QkZ6TeO0aaqN974meXVnV_I7VS3/view?usp=drivesdkPag_159.png",
    "https://drive.google.com/file/d/1_Fqzp-DovxzzJyntjj5jWTZmS9HU80a-/view?usp=drivesdkPag_160.png",
    "https://drive.google.com/file/d/1ewTPgxNEpuwU7mbDmrqfj_YGgruQeBk1/view?usp=drivesdkPag_161.png",
    "https://drive.google.com/file/d/17QVYbdk5BpxCA7S84UAJ5fwN_6a77azQ/view?usp=drivesdkPag_162.png",
    "https://drive.google.com/file/d/1H25_kvWU-xj2w4vOIOSVt6e0R0c3rIkp/view?usp=drivesdkPag_163.png",
    "https://drive.google.com/file/d/1Wmqv9YMVVYgNDTtlaei7YpybZAuk2i2V/view?usp=drivesdkPag_164.png",
    "https://drive.google.com/file/d/1w05gWqyFM7ny1cv-naxXpRIeUbea5q5F/view?usp=drivesdkPag_165.png",
    "https://drive.google.com/file/d/1_GXDGXs0aGXXBJ1HQ_r1ynvAoopBZ_fq/view?usp=drivesdkPag_166.png",
    "https://drive.google.com/file/d/1ZFZYe5hn4DjGL5dlBQw7qlAMvRq3uqQ-/view?usp=drivesdkPag_167.png",
    "https://drive.google.com/file/d/16eNGFRNfq6sva4FrT5neS7h82Js40rV5/view?usp=drivesdkPag_168.png",
    "https://drive.google.com/file/d/1vBzTCHOX-XsamPUR210Lts_DW1HT_53B/view?usp=drivesdkPag_169.png",
    "https://drive.google.com/file/d/1bDMXvldrjySMB5xNvVXLsbs7AovHjqdv/view?usp=drivesdkPag_170.png",
    "https://drive.google.com/file/d/150znqqcj27Dt1YhTTMe5YzZhw7G0WQxO/view?usp=drivesdkPag_171.png",
    "https://drive.google.com/file/d/1Y5BmciaCXq9zJNfDXH3UyyrsUvYTZT_J/view?usp=drivesdkPag_172.png",
    "https://drive.google.com/file/d/1bwdwl59k22z9YI4RolPRhNoGc4IRAk1l/view?usp=drivesdkPag_173.png",
    "https://drive.google.com/file/d/1HKowgHrnWMBeK2myl2AAeZ-1Iv-dR2Qd/view?usp=drivesdkPag_174.png",
    "https://drive.google.com/file/d/1c8vbNcUE-PBgFt5NAexBhMkjDFnbEBe2/view?usp=drivesdkPag_175.png",
    "https://drive.google.com/file/d/1opT5UED3xiPTFyJuv3h_CgfqPhsnY4Go/view?usp=drivesdkPag_176.png",
    "https://drive.google.com/file/d/1FFlfhyPCYVtyhDDt47BSdOUDUZjGqfBA/view?usp=drivesdkPag_177.png",
    "https://drive.google.com/file/d/1edBQl2V8UbbkGVykHvpjBx0sPjCbFR85/view?usp=drivesdkPag_178.png",
    "https://drive.google.com/file/d/1b4U2OkwP9N4vmFdLlnnahYmNje5l58Ud/view?usp=drivesdkPag_179.png",
    "https://drive.google.com/file/d/1bsm5VqgtmkSBWiB8aRr84m_o9xAl3dBa/view?usp=drivesdkPag_180.png",
    "https://drive.google.com/file/d/1Dk02mQGu3U3A6-i-b0rhLwP0RJpkO2Nv/view?usp=drivesdkPag_181.png",
    "https://drive.google.com/file/d/1nQGFey_rWqV_6w5_HFqXa863BCfKRwnI/view?usp=drivesdkPag_182.png",
    "https://drive.google.com/file/d/1baV2F-dZCeH8Z5GhjD97KdNYwb-aS28z/view?usp=drivesdkPag_183.png",
    "https://drive.google.com/file/d/13iaSUoru50NBkhosqvNmVsEg9bX1xodC/view?usp=drivesdkPag_184.png",
    "https://drive.google.com/file/d/1CCElHriVL1yw33pOEicDUfaE86ltVb74/view?usp=drivesdkPag_185.png",
    "https://drive.google.com/file/d/1PO_8TXLffwmmLm8E7LJXLBoskpl4oFYI/view?usp=drivesdkPag_186.png",
    "https://drive.google.com/file/d/1_pI9Hb7CbYnS2XRHFSe2AcDW7LpIHH4V/view?usp=drivesdkPag_187.png",
    "https://drive.google.com/file/d/1PKnsdeysMoIFvMgZR7ojZ9xIKrZruExy/view?usp=drivesdkPag_188.png",
    "https://drive.google.com/file/d/1AAYDG2yMYkvoagVcfLXH18X7EHDAoLW7/view?usp=drivesdkPag_189.png",
    "https://drive.google.com/file/d/1fn3MyZ5z5Yji4XfQSh7LG5epqukwC3cq/view?usp=drivesdkPag_190.png",
    "https://drive.google.com/file/d/1SBrTfovJL0BnGFkm5RHoWsdVwU_-i290/view?usp=drivesdkPag_191.png",
    "https://drive.google.com/file/d/1H6r0Kri7o9ho1urM24Bib6i_WpBo2mHq/view?usp=drivesdkPag_192.png",
    "https://drive.google.com/file/d/1EN5yk7ojR6B-2pZC1wMnx-4ltg7jC9AF/view?usp=drivesdkPag_193.png",
    "https://drive.google.com/file/d/1jNaPA1AVlQw00PYZ0PfSTiXKnDHc-HxL/view?usp=drivesdkPag_194.png",
    "https://drive.google.com/file/d/149rYcgH3b2XMUbHJZdAU1vCeR5nSOwWO/view?usp=drivesdkPag_195.png",
    "https://drive.google.com/file/d/1HEuNdBMsIYvTX_tx9DotAKnsEHQLNacJ/view?usp=drivesdkPag_196.png",
];

// URL Audios cloudinary
const urlsAudios = [
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512408/Lesson_1_ydu9xy.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512408/Lesson_2_vhav9w.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512409/Lesson_3_xebwoo.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512408/Lesson_4_i3nvyk.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512409/Lesson_5_j4qltr.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512407/Lesson_6_ntjr8k.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512405/Lesson_7_hb2chw.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512405/Lesson_8_cmx4hd.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512405/Lesson_9_ffkmeq.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512404/Lesson_10_ohysdj.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512405/Lesson_11_l9gmpg.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512404/Lesson_12_h5sms0.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512402/Lesson_13_nk4nri.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512403/Lesson_14_nruzpk.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512402/Lesson_15_ft6rmt.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512401/Lesson_16_zbpk2i.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512401/Lesson_17_lvkzdj.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512401/Lesson_18_j2fvol.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512399/Lesson_19_r17lyh.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512399/Lesson_20_bwuvac.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512398/Lesson_21_ulfo2l.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512399/Lesson_22_jsfyuv.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512398/Lesson_23_ys3l0n.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512397/Lesson_24_l3mnin.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512396/Lesson_25_sz9gnp.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512396/Lesson_26_vwbo0l.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512395/Lesson_27_elc0xz.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512395/Lesson_28_qjpeqg.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512394/Lesson_29_a7kuga.mp3",
    "https://res.cloudinary.com/dfsbtdex1/video/upload/v1735512394/Lesson_30_edhaxx.mp3"
    // Agrega más URLs aquí
];

// --- Credenciales válidas ---
// Puedes agregar hasta 10 combinaciones de usuario y contraseña
const VALID_CREDENTIALS = [
    { username: "1", password: "1" },
    { username: "user1", password: "pass1" },
];

// --- Elementos del DOM ---
const loginContainer = document.getElementById('login-container');
const contentContainer = document.getElementById('content-container');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

// --- Funciones de manejo de login ---
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verifica si las credenciales coinciden con alguna de las válidas
    const validCredential = VALID_CREDENTIALS.find(
        (cred) => cred.username === username && cred.password === password
    );
    
    if (validCredential) {
        loginContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        loginError.textContent = "Usuario o contraseña incorrectos.";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    contentContainer.classList.add('hidden');
});

// --- Referencias para el reproductor de audio ---
const audioSelector = document.getElementById('audioSelector');
const audioPlayer = document.getElementById('audioPlayer');
const speedControl = document.getElementById('speedControl');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volumeSlider');
const rewindBtn = document.getElementById('rewindBtn');
const forwardBtn = document.getElementById('forwardBtn');

// Control de volumen
volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
});

// Botones de salto
rewindBtn.addEventListener('click', () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 15);
});

forwardBtn.addEventListener('click', () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 15);
});

// Mantener el valor del volumen al cambiar de audio
audioSelector.addEventListener('change', () => {
    const selectedAudio = audioSelector.value;
    if (selectedAudio) {
        audioPlayer.src = selectedAudio;
        audioPlayer.volume = volumeSlider.value; // Mantener el volumen actual
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        alert('Por favor selecciona un audio.');
    }
});

// --- Funciones de manejo de audio ---

// Reproducir/Pausar
playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Actualizar barra de progreso y tiempo
audioPlayer.addEventListener('timeupdate', () => {
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.style.width = percent + '%';
  
  currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

// Obtener duración total
audioPlayer.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audioPlayer.duration);
});

// Hacer clic en la barra de progreso para saltar a una parte del audio
progressBar.addEventListener('click', (e) => {
  const clickPosition = e.offsetX / progressBar.offsetWidth;
  audioPlayer.currentTime = clickPosition * audioPlayer.duration;
});

// Control de velocidad
speedControl.addEventListener('change', function () {
  const speed = parseFloat(speedControl.value);
  audioPlayer.playbackRate = speed;
});

// --- Cargar las opciones de audio ---
urlsAudios.forEach((audioUrl, index) => {
  const option = document.createElement('option');
  option.value = audioUrl;
  option.textContent = `Lesson ${index + 1}`;
  audioSelector.appendChild(option);
});

// Reproducir el audio seleccionado
audioSelector.addEventListener('change', () => {
  const selectedAudio = audioSelector.value;
  if (selectedAudio) {
    audioPlayer.src = selectedAudio;
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    alert('Por favor selecciona un audio.');
  }
});

// --- Función para formatear el tiempo ---
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}



// --- Referencias adicionales para el audio ---
//const playAudioBtn = document.getElementById('playAudioBtn');
//const pauseAudioBtn = document.getElementById('pauseAudioBtn');
//const stopAudioBtn = document.getElementById('stopAudioBtn');

// --- Funciones de manejo de audio ---
/*pauseAudioBtn.addEventListener('click', () => {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
});

stopAudioBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reinicia el tiempo del audio
});

playAudioBtn.addEventListener('click', () => {
    const selectedAudio = audioSelector.value;
    if (selectedAudio) {
        audioPlayer.src = selectedAudio;
        audioPlayer.play();
        audioPlayer.classList.remove('hidden');
    } else {
        alert('Por favor selecciona un audio.');
    }
});
*/
speedControl.addEventListener('change', function () {
    const speed = parseFloat(speedControl.value);
    audioPlayer.playbackRate = speed;
});

// --- Cargar las opciones de audio ---
urlsAudios.forEach((audioUrl, index) => {
    const option = document.createElement('option');
    option.value = audioUrl;
    option.textContent = `Lesson ${index + 1}`;
    audioSelector.appendChild(option);
});

// --- Funciones de manejo de Google Drive ---
function extraerIdDeGoogleDrive(url) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}

function convertirUrlGoogleDrive(url) {
    const fileId = extraerIdDeGoogleDrive(url);
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : null;
}

const imagenes = urlsOriginales.map(url => convertirUrlGoogleDrive(url));

// --- Variables para el flipbook ---
let currentPageIndex = 0;
let currentZoom = 1; // Nivel de zoom actual
const bookContainer = document.querySelector('.book-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPageSpan = document.getElementById('currentPage');
const totalPagesSpan = document.getElementById('totalPages');
const zoomSlider = document.getElementById('zoomSlider');

// --- Configuración del zoom ---
zoomSlider.addEventListener('input', (e) => {
    currentZoom = parseFloat(e.target.value);
    applyZoom();
});

function zoomIn() {
    currentZoom += 0.1;
    applyZoom();
}

function zoomOut() {
    currentZoom = Math.max(0.1, currentZoom - 0.1);
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

// --- Funciones de navegación del flipbook ---
function loadImages() {
    bookContainer.innerHTML = ''; // Limpiar contenedor

    imagenes.forEach((src, index) => {
        const page = document.createElement('div');
        page.className = `page ${index === 0 ? 'active' : ''}`;

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Página ${index + 1}`;
        img.style.position = 'absolute';
        img.style.transform = `scale(${currentZoom})`; // Aplicar el zoom actual

        img.onerror = function () {
            this.parentElement.innerHTML = `
                <div class="error-message">
                    Error al cargar la imagen ${index + 1}.<br>
                    Asegúrate de que la imagen sea pública en Google Drive.
                </div>
            `;
        };

        page.appendChild(img);
        bookContainer.appendChild(page);
    });

    assignDragEvents(); // Asignar eventos de arrastre
    totalPagesSpan.textContent = imagenes.length;
    updateButtons();
}

function updateButtons() {
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === imagenes.length - 1;
    currentPageSpan.textContent = currentPageIndex + 1;
}

function showPage(index) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
    applyZoom(); // Mantener el zoom al cambiar de página
}

function prevPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
        updateButtons();
    }
}

function nextPage() {
    if (currentPageIndex < imagenes.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
        updateButtons();
    }
}

function goToPage() {
    const pageInput = document.getElementById('pageInput');
    const pageNumber = parseInt(pageInput.value, 10);
    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > imagenes.length) {
        alert(`Por favor, ingresa un número de página válido entre 1 y ${imagenes.length}.`);
        return;
    }

    currentPageIndex = pageNumber - 1;
    updatePageDisplay();
    pageInput.value = ''; // Limpiar el input después de navegar
}

const pageInput = document.getElementById('pageInput');
pageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const pageNumber = parseInt(pageInput.value, 10);
        if (!isNaN(pageNumber) && pageNumber > 0) {
            goToPage(pageNumber);
        } else {
            alert("Por favor, ingresa un número de página válido.");
        }
    }
});

function updatePageDisplay() {
    document.querySelectorAll('.page').forEach((page, index) => {
        page.classList.toggle('active', index === currentPageIndex);
    });

    currentPageSpan.textContent = currentPageIndex + 1;
    totalPagesSpan.textContent = imagenes.length;

    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === imagenes.length - 1;
}

function applyZoom() {
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.transform = `scale(${currentZoom})`;
    }
}

// --- Funciones de arrastre de las imágenes ---
let startX, startY, isDragging = false;

function dragStart(e) {
    isDragging = true;
    const img = e.target;
    startX = e.clientX - img.offsetLeft;
    startY = e.clientY - img.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
}

function drag(e) {
    if (!isDragging) return;
    const img = document.querySelector('.page.active img');
    if (img) {
        img.style.left = `${e.clientX - startX}px`;
        img.style.top = `${e.clientY - startY}px`;
    }
}

function dragEnd() {
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', dragEnd);
}

function assignDragEvents() {
    const images = document.querySelectorAll('.page img');
    images.forEach(img => {
        img.addEventListener('mousedown', dragStart);
    });
}

// --- Navegación con teclas de flecha ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevPage();
    if (e.key === 'ArrowRight') nextPage();
});

// --- Inicialización ---
loadImages();
updatePageDisplay();