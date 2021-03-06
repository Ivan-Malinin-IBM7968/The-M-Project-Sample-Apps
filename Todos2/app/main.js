// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.6
//
// Project: Todos2 
// ==========================================================================

var Todos2 = Todos2 || {};

Todos2.app = M.Application.design({

    entryPage: 'page1',

    page1: M.PageView.design({

        cssClass: 'bg',

        events: {
            pageshow: {
                target: Todos2.TodoController,
                action: 'init'
            }
        },

        childViews: 'header content tabs',

        header: M.ToolbarView.design({
            childViews: 'centerLabel toggleView',

            toggleView: M.ToggleView.design({
                childViews: 'button1 button2',
                anchorLocation: M.RIGHT,
                toggleOnClick: YES,

                button1: M.ButtonView.design({
                    value: M.I18N.l('edit'),
                    icon: 'gear',
                    events: {
                        tap: {
                            target: Todos2.TodoController,
                            action: 'edit'
                        }
                    }
                }),

                button2: M.ButtonView.design({
                    value: M.I18N.l('save'),
                    icon: 'check',
                    events: {
                        tap: {
                            target: Todos2.TodoController,
                            action: 'edit'
                        }
                    }
                })
            }),

            centerLabel: M.LabelView.design({
                value: 'Todos',
                anchorLocation: M.CENTER
            }),

            anchorLocation: M.TOP
        }),

        content: M.ScrollView.design({

            /* order in childViews string defines render order*/
            childViews: 'todoList',

            todoList: M.ListView.design({
                contentBinding: {
                    target: Todos2.TodoController,
                    property: 'todos'
                },
                listItemTemplateView: Todos2.TodoItemView
            })

        }),

        tabs: Todos2.tabs

    }),

    subpage1: M.PageView.design({

        cssClass: 'bg',

        events: {
            pagehide: {
                target: Todos2.TodoController,
                action: 'hide'
            }
        },

        childViews: 'header content tabs',

        header: M.ToolbarView.design({
            childViews: 'backButton centerLabel toggleView',

            backButton: M.ButtonView.design({
                value: 'Back',
                icon: 'arrow-l',
                events: {
                    tap: {
                        target: Todos2.TodoController,
                        action: 'gotoToDoList'
                    }
                },
                anchorLocation: M.LEFT
            }),

            toggleView: M.ToggleView.design({
                childViews: 'button1 button2',
                anchorLocation: M.RIGHT,

                button1: M.ButtonView.design({
                    value: M.I18N.l('edit'),
                    events: {
                        tap: {
                            target: Todos2.TodoController,
                            action: 'editItem'
                        }
                    },
                    icon: 'gear'
                }),

                button2: M.ButtonView.design({
                    value: M.I18N.l('save'),
                    events: {
                        tap: {
                            target: Todos2.TodoController,
                            action: 'saveTodo'
                        }
                    },
                    icon: 'check'
                })
            }),

            centerLabel: M.LabelView.design({
                contentBinding: {
                    target: Todos2.TodoController,
                    property: 'selTitle'
                },
                anchorLocation: M.CENTER
            }),

            anchorLocation: M.TOP
        }),

        content: M.ToggleView.design({

            childViews: 'content1 content2',

            content1: M.ScrollView.design({

                childViews: 'titleLabel title textLabel text dateLabel date',

                titleLabel: M.LabelView.design({
                    value: M.I18N.l('title'),
                    cssClass: 'detailsLabel'
                }),

                title: M.LabelView.design({
                    contentBinding: {
                        target: Todos2.TodoController,
                        property: 'selTitle'
                    },
                    cssClass: 'details'
                }),

                textLabel: M.LabelView.design({
                    value: M.I18N.l('details'),
                    cssClass: 'detailsSpacer detailsLabel'
                }),

                text: M.LabelView.design({
                    contentBinding: {
                        target: Todos2.TodoController,
                        property: 'selText'
                    },
                    cssClass: 'details'
                }),

                dateLabel: M.LabelView.design({
                    value: M.I18N.l('due_date'),
                    cssClass: 'detailsSpacer detailsLabel'
                }),

                date: M.LabelView.design({
                    contentBinding: {
                        target: Todos2.TodoController,
                        property: 'selDateFormat'
                    },
                    cssClass: 'details'
                })

            }),

            content2: M.ScrollView.design({

                childViews: 'form2 del',

                form2: M.FormView.design({

                    childViews: 'title text date',

                    showAlertDialogOnError: YES,

                    alertTitle: M.I18N.l('error'),

                    title: M.TextFieldView.design({
                        name: 'title',
                        label: M.I18N.l('title'),
                        validators: [M.PresenceValidator.customize({
                            msg: M.I18N.l('title_req')
                        })],
                        cssClassOnError: 'error',
                        contentBinding: {
                            target: Todos2.TodoController,
                            property: 'selTitle'
                        },
                        cssClass: 'todos_form'
                    }),

                    text: M.TextFieldView.design({
                        hasMultipleLines: YES,
                        name: 'text',
                        label: M.I18N.l('details'),
                        validators: [M.PresenceValidator.customize({
                            msg: M.I18N.l('details_req')
                        })],
                        cssClassOnError: 'error',
                        contentBinding: {
                            target: Todos2.TodoController,
                            property: 'selText'
                        },
                        cssClass: 'todos_form'
                    }),

                    date: M.TextFieldView.design({
                        name: 'date',
                        label: M.I18N.l('due_date'),
                        isEnabled: NO,
                        validators: [M.PresenceValidator.customize({
                            msg: M.I18N.l('due_date_req')
                        })],
                        cssClassOnError: 'error',
                        contentBinding: {
                            target: Todos2.TodoController,
                            property: 'selDate'
                        },
                        cssClass: 'todos_form',
                        events: {
                            tap: {
                                target: Todos2.TodoController,
                                action: 'getDate'
                            }
                        }
                    })

                }),

                del: M.ButtonView.design({
                    value: M.I18N.l('delete'),
                    cssClass: 'b',
                    events: {
                        tap: {
                            target: Todos2.TodoController,
                            action: 'remove'
                        }
                    }
                })

            })

        }),

        tabs: Todos2.tabs

    }),

    page2: M.PageView.design({

        cssClass: 'bg',

        childViews: 'header content tabs',

        header: M.ToolbarView.design({
            childViews: 'centerLabel addButton',

            addButton: M.ButtonView.design({
                value: M.I18N.l('add'),
                events: {
                    tap: {
                        target: Todos2.TodoController,
                        action: 'addTodo'
                    }
                },
                icon: 'plus',
                anchorLocation: M.RIGHT
            }),

            centerLabel: M.LabelView.design({
                value: 'Todos',
                anchorLocation: M.CENTER
            }),

            anchorLocation: M.TOP
        }),

        content: M.ScrollView.design({

            childViews: 'form1',

            form1: M.FormView.design({

                childViews: 'title text date',

                showAlertDialogOnError: YES,

                alertTitle: M.I18N.l('error'),

                title: M.TextFieldView.design({
                    name: 'title',
                    label: M.I18N.l('title'),
                    validators: [M.PresenceValidator.customize({
                        msg: M.I18N.l('title_req')
                    })],
                    cssClassOnError: 'error',
                    cssClass: 'todos_form'
                }),

                text: M.TextFieldView.design({
                    hasMultipleLines: YES,
                    name: 'text',
                    label: M.I18N.l('details'),
                    validators: [M.PresenceValidator.customize({
                        msg: M.I18N.l('details_req')
                    })],
                    cssClassOnError: 'error',
                    cssClass: 'todos_form'
                }),

                date: M.TextFieldView.design({
                    name: 'date',
                    label: M.I18N.l('due_date'),
                    initialText: D8.now().format('mm/dd/yyyy HH:MM'),
                    isEnabled: NO,
                    validators: [M.PresenceValidator.customize({
                        msg: M.I18N.l('due_date_req')
                    })],
                    cssClassOnError: 'error',
                    cssClass: 'todos_form',
                    events: {
                        tap: {
                            target: Todos2.TodoController,
                            action: 'getDate'
                        }
                    }
                })

            })

        }),

        tabs: Todos2.tabs

    }),

    page3: M.PageView.design({

        cssClass: 'bg',

        childViews: 'header content tabs',

        events: {
            pageshow: {
                target: Todos2.LanguageController,
                action: 'init'
            }
        },

        header: M.ToolbarView.design({

            value: M.I18N.l('settings'),

            anchorLocation: M.TOP
        }),

        content: M.ScrollView.design({

            childViews: 'langSelection contactHeader contactText contactMail contactUrl',

            langSelection: M.SelectionListView.design({

                childViews: 'item1 item2 item3 item4 item5 item6 item7 item8 item9 item10 item11 item12 item13 item14',

                selectionMode: M.SINGLE_SELECTION_DIALOG,

                label: M.I18N.l('language'),

                name: 'language',

                //applyTheme: NO,

                events: {
                    change: {
                        target: Todos2.LanguageController,
                        action: 'changeLanguage'
                    }
                },

                item1: M.SelectionListItemView.design({

                    label: M.I18N.l('german'),
                    value: 'de_de'

                }),

                item2: M.SelectionListItemView.design({

                    label: M.I18N.l('english'),
                    value: 'en_us'

                }),

                item3: M.SelectionListItemView.design({

                    label: M.I18N.l('spanish'),
                    value: 'es_es'

                }),

                item4: M.SelectionListItemView.design({

                    label: M.I18N.l('portuguese'),
                    value: 'pt_br'

                }),

                item5: M.SelectionListItemView.design({

                    label: M.I18N.l('chinese-simple'),
                    value: 'zh_cn'

                }),

                item6: M.SelectionListItemView.design({

                    label: M.I18N.l('chinese-traditional'),
                    value: 'zh_tw'

                }),

                item7: M.SelectionListItemView.design({

                    label: M.I18N.l('russian'),
                    value: 'ru_ru'

                }),

                item8: M.SelectionListItemView.design({

                    label: M.I18N.l('italian'),
                    value: 'it_it'

                }),

                item9: M.SelectionListItemView.design({

                    label: M.I18N.l('polish'),
                    value: 'pl_pl'

                }),

                item10: M.SelectionListItemView.design({

                    label: M.I18N.l('dutch'),
                    value: 'nl_nl'

                }),

                item11: M.SelectionListItemView.design({

                    label: M.I18N.l('slovakian'),
                    value: 'sk_sk'

                }),

                item12: M.SelectionListItemView.design({

                    label: M.I18N.l('korean'),
                    value: 'ko_kr'

                }),

                item13: M.SelectionListItemView.design({

                    label: M.I18N.l('swedish'),
                    value: 'sv_sv'

                }),

                item14: M.SelectionListItemView.design({

                    label: M.I18N.l('finnish'),
                    value: 'fi_fi'

                })

            }),

            contactHeader: M.LabelView.design({

                value: M.I18N.l('contact'),

                cssClass: 'label'

            }),

            contactText: M.LabelView.design({

                value: M.I18N.l('contactText'),

                cssClass: 'contactText'

            }),

            contactMail: M.LabelView.design({

                value: 'info@panacoda.com',

                hyperlinkType: M.HYPERLINK_EMAIL,

                hyperlinkTarget: 'info@panacoda.com'

            }),

            contactUrl: M.LabelView.design({

                value: 'www.panacoda.com',

                hyperlinkType: M.HYPERLINK_WEBSITE,

                hyperlinkTarget: 'http://www.panacoda.com/'

            })

        }),

        tabs: Todos2.tabs

    })

});