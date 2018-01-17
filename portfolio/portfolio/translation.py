from modeltranslation.translator import translator, TranslationOptions
from .models import Project

class ProjectTranslationOptions(TranslationOptions):
    fields = ('title','subtitle','description')
translator.register(Project, ProjectTranslationOptions)
