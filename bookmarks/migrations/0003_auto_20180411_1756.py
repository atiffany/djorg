# Generated by Django 2.0.4 on 2018-04-11 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarks', '0002_auto_20180410_1943'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookmark',
            name='bookmark_note',
            field=models.TextField(blank=True, verbose_name='Note'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='bookmark_url',
            field=models.URLField(unique=True, verbose_name='URL'),
        ),
    ]